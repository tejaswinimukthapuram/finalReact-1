import React from 'react'
import ArticleCard from '../ArticleCard'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './index.css'

const Index = () => {

const [articlesList,setArticlesList]=useState()
useEffect(()=>{
    axios.get("http://localhost:3000/articles")
    .then((res)=>{
        setArticlesList(res.data)
        // console.log(res.data);
    })
    .catch((err)=>console.log(err))
},[])




  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active car-item">
      <h4>Hello</h4>
    </div>
    <div className="carousel-item car-item" >
    <h4>Hello</h4>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<Container>
    <Row>
    <h1>Trending Blogs</h1>
        {articlesList&&articlesList.map((each)=>{
            return   (<Col sm='12' md="4" key={each._id}>
                <div>
            <ArticleCard articleData={each}/>
            </div>
            </Col>)
        })}
      
    </Row>
</Container>
    </>
  )
}

export default Index;