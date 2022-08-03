import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Footer() {
    return (
      <div className="ca" >
           
      <Container className='ab'>
        <br/>
      <Row className='ac'>
        <Col sm={4} className="aez" > <a href="/" className='her'> <Button variant="light"> <HomeIcon/> Back To Home</Button> </a></Col>
        <Col sm={4} className="aez"> <a href="/help" className='her'> <Button variant="light"> <ContactMailIcon/> Contact Us</Button> </a></Col>
        <Col sm={4} className="aez"> <a href="/logout" className='her'> <Button variant="light"> <LogoutIcon/> Log out</Button> </a></Col>
      </Row>
       <br/>
      <Row className='ac'>
        <Col sm={12} className="aezz">Follow Us:
        <a href="https://github.com/klrahul123"><GitHubIcon/> </a>
        <a href="https://www.facebook.com/profile.php?id=100043468223500"><FacebookIcon/></a>  
        <a href="https://twitter.com/RahulGu95108304"><TwitterIcon/></a>
         
        </Col>
      </Row>
      <br/>

      <Row className='ac'>
        <Col sm={12} className="aezz">All Rights Reserved Copyright © C++ CODER 2022 </Col>
      </Row>
    </Container>

      </div>
    );
  }