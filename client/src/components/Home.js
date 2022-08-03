import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Button } from 'react-bootstrap';
import Footer from "./Footer";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Alert from 'react-bootstrap/Alert';





export default function Home() {
    return (
      <div className="x">
           <br/> <br/>
          <Container className='rtp'> 
       <Row className='rubi'>
        <Col sm={6} className="modii">
        <div className='r' >
          <div className="typewriter">
          <h1 className="topHead">Welcome to <p className="rrr">C++ CODER</p>
          </h1>
          </div>
          
        <p className="hum" > Confused on which C++ course to take? I have got you covered. Browse courses and find out the best C++ course for you. Its free!  C++ CODER is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
        <a href="/content" class="her" onClick={()=>alert("Opening Free Course")}>
          
          
          
          
        <Button > <ChevronRightIcon/> Free C++ Course </Button> </a>
        <a href="/help" className='her'> <Button variant="dark"><ChevronRightIcon/> More Info</Button> </a>
        </div>
    </Col>
    <Col sm={6} className="modiz">
          
    </Col>
    
  </Row>
</Container> 
<br/> <hr/> <br/> <br/>
<Footer/>

      

      </div>
    );
  }