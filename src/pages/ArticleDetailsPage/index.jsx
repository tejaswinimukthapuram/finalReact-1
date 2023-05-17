import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentComp from "../../components/CommentComp";
import AddCommentComp from "../../components/AddCommentComp";
import "./index.css";

const Index = () => {
  const location = useLocation();
  const state = location.state;
  const [comments, setComments] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisliked] = useState(false);

  const onLike = () => {
    setIsLiked(!isLiked);
    console.log("Blog is Liked");
  };

  const onDisLike = () => {
    setIsDisliked(!isDisLiked);
    console.log("Blog is DisLiked");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/comments/" + state._id)
      .then((res) => {
        // console.log(res.data)
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(state)
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <div className="about-article-container">
              <div className="banner-img"></div>
              <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                <div>
                  <h1>{state?.title}</h1>
                  <img src={state?.image} className="img" />
                  <p>{state?.description}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="comments-container">
              <div className="like-btns-container d-flex flex-row justify-content-between">
                <button onClick={onLike} className="like-or-dislike-btn">
                  {isLiked ? (
                    <span className="material-icons">thumb_up</span>
                  ) : (
                    <span className="material-icons-outlined">thumb_up</span>
                  )}
                </button>

                <button onClick={onDisLike} className="like-or-dislike-btn ">
                  {isDisLiked ? (
                    <span className="material-icons">thumb_down_alt</span>
                  ) : (
                    <span className="material-icons-outlined">
                      thumb_down_off_alt
                    </span>
                  )}
                </button>
              </div>
              <h2>{comments && comments.length} Comments</h2>
              {comments &&
                comments.map((each) => {
                  return <CommentComp key={each._id} commentDetails={each} />;
                })}
            </div>
            <hr/>
            <div className="leave-comment-container">
              <h5>Leave a comment</h5>
              <AddCommentComp blogId={state._id} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
