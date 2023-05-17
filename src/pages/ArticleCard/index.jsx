
import { Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import React from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";

const Index = (props) => {
    const {articleData}=props;
const navigate=useNavigate()

const goToDetails=(articleData)=>{
    navigate('/details', {state:articleData})
}


  return (
   <>

<Card className="card bounce" >
<img src={articleData.image} className="image card-img" />



<div style={{ padding: "10px" }}>
  <h4>{articleData.title}</h4>
  <p>{articleData.description}</p>

  <button onClick={()=>goToDetails(articleData)} className="readmore-btn">Read More</button>

  
 
</div>

</Card>
   </>
  )
}

export default Index
