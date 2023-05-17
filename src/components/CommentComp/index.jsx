import React from 'react'
import Card from "react-bootstrap/Card";
import './index.css';

const Index = (props) => {
    const {commentDetails}=props
    console.log(commentDetails)
  return (
    <>
    <Card className='comment-card mt-3 mb-3'>
    <div className='d-flex flex-row'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUX52K4wjSKVKzHXBgagCqtpWMuJ30ePq_HubGBg&s" className="profile-img"/>
        <div >
 
            <h6 className="comment">{commentDetails.name}</h6>
            <p>{commentDetails.message}</p>
        </div>
    </div>
    </Card>
    </>
  )
}

export default Index;