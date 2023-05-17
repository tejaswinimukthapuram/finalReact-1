import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from 'axios';

const Index = () => {

    const navigate = useNavigate();
    
   
   
    const defaultValues = {
      title: "",
      description: "",
      isLiked:false,
      image: "",
    }
    const [blog, setBlog] = useState(defaultValues);
    
    
    const formik = useFormik({
      initialValues: blog,
      enableReinitialize:true,
      validationSchema: Yup.object({
        title: Yup.string()
          .min(3, "should be more than 3 characters")
          .max(150, "Must be 150 characters or less")
          .required("Required"),
        description: Yup.string()
          .min(3, "Must be  3 characters or more")
          .max(1000, "Must be 1000 characters or less")
          .required("Required"),
        
        image: Yup.string()
          .min(3, "Must be  3 characters or more")
          .max(500, "Must be 500 characters or less")
          .required("Required"),
      }),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2))
        axios.post('http://localhost:3000/articles', values)
        .then(function (response) {
          console.log(response);
          navigate("/home");
        })
        .catch(function (error) {
          console.log(error);
        });
       
      //   fetch("http://localhost:3001/products", {method:'POST',  headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // }).then((res)=>res.json())
      // .then((res)=>{
      //   console.log(res)
      //   navigate("/");
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
        
        // setFormState(values);
     
    }
  })

  
  return (
    <>
     <Container>
      <Row>
        <Col>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value = {formik.values.title}
                onChange={formik.handleChange}
                placeholder='Enter Title'
              />
              <Form.Text className='text-danger'>
                {formik.touched.title && formik.errors.title ? (
                  <div className='text-danger'>{formik.errors.title}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                name='description'
                onChange={formik.handleChange}
                value={formik.values.description}
                placeholder='Enter Description'
              />
              <Form.Text className='text-danger'>
                {formik.touched.description && formik.errors.description ? (
                  <div className='text-danger'>{formik.errors.description}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            
            <Form.Group className='mb-3' controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                name='image'
                onChange={formik.handleChange}
                value = {formik.values.image}
                placeholder='Enter Title'
              />
              <Form.Text className='text-danger'>
                {formik.touched.image && formik.errors.image ? (
                  <div className='text-danger'>{formik.errors.image}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Index;

