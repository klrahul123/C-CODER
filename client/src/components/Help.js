import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import './cs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Loop from "./Loop";
import { Button } from 'react-bootstrap';



export default function Help() {
    return (
      <div className="m">
        <br/>
       <Container className='abv'>
       
      <Row className='acr'>
        
        <Col sm={12} className="aaea" ><h1 className="kalu">
        
        <Typewriter onInit={(typewriter) => {
          typewriter
          .typeString("We're Here to Help You!")
          .start();
        }}/>
        
                 
         </h1> </Col>
      </Row>
      <Loop/>
      <br/>
          <br/>
      <Row className='ac'>
            
        <Col sm={6} className="aae">
          
        <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className="kaluu">Describe The Probem you're having:</Form.Label>
                <Form.Control type="text" required />
      </Form.Group>

      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=> { alert("Sent")}}>
        Send
      </Button>
      </div>
      <br/>
      <h6 className='dq'>OR</h6>

      <div className="d-grid gap-2">
      
      <Button variant="dark" size="lg" >
      <a href="" className='her'> E-Mail Us </a>
      </Button>
      
      </div>
      
    
    </Form>
    </Col>

    <Col sm={6} className="aaer">

    </Col>
    </Row>

    </Container>    
        <br/> <hr/> <br/>
      <Footer/>
      </div>
    );
  }