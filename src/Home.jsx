import * as React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './toy.css';
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import beautifulblackscreencode from './beautifulblackscreencode.jpg';
import { FcUp } from "react-icons/fc";
import DoughnutChartDemo from  './DoughnutChartDemo';



export default function Home() {
    return (
      <>
    <Container className='rtp'> 
  <Row className='rubi'>
    <Col sm={6} className="modii">
        <div className='r'><h2 class="hum">Welcome to <h2 className="rrr">CODING HUB</h2></h2>
        <p className="hum" > Confused on which course to take? I have got you covered. Browse courses and find out the best course for you.Its free! Programming HUB is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
        <a href="/c" class="her" onClick={()=>alert("Opening Free Course")}> <Button > Free Courses </Button> </a>
        <a href="/help" className='her'> <Button variant="dark"> More Info</Button> </a>
        </div>
    </Col>
    <Col sm={6} className="modiz">
          
    </Col>
  </Row>
</Container>

    <hr />
  <div className="n">
     <h2>Recommended Courses</h2>
  </div>
  <hr />
  <Container className='rtp'>
  <Row className='rubi'>
    <Col sm={6} className="modii">
    <Card className='rubi' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={beautifulblackscreencode} />
  <Card.Body>
    <Card.Title className='u'>C Language</Card.Title>
    <Card.Text>
    C is a powerful general-purpose programming language, used to develop software like operating systems, databases, and so on.
    </Card.Text>
    <Button variant="danger"><a className='po' href="/c"> Start </a></Button>
  </Card.Body>
</Card>  
    </Col>

    <Col sm={6} className="modi">
    <Card className='rubi' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={beautifulblackscreencode} />
  <Card.Body>
    <Card.Title className='u'>Java Language</Card.Title>
    <Card.Text>
    Java is a powerful general-purpose programming language. It is used to develop desktop and mobile applications, and so on.
    </Card.Text>
    <Button variant="danger"><a className='po' href="/java"> Start</a></Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
 <br /> <br />
 <hr />
  
  <div className="n">
     <h2>Popularity of Languages</h2>
  </div>
  <hr />
    <br /> <br /> <br />
<Container className='rtp'>
  <Row className='v'>
    <Col sm={12} className="modii">
    <DoughnutChartDemo/>  
    </Col>
  </Row>
</Container>
<br /> <br />
<hr />
  <div className="n">
     <h2>Other Courses</h2>
  </div>
  <hr />
  
  <Container className='rtp'>
  <Row className='v'>
    <Col sm={6} className="modii">
    <Card className='rubi' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={beautifulblackscreencode} />
  <Card.Body>
    <Card.Title className='u'>C++ Language</Card.Title>
    <Card.Text>
    C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on.
    </Card.Text>
    <Button variant="danger"><a className='po' href="/c++">Start </a></Button>
  </Card.Body>
</Card>  
    </Col>
      <br />
    <Col sm={6} className="modi">
    <Card className='rubi' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={beautifulblackscreencode} />
  <Card.Body>
    <Card.Title className='u'>Python Language</Card.Title>
    <Card.Text>
    Python is a powerful general-purpose programming language. It is used in web development, data science, creating software prototypes, and so on.
    </Card.Text>
    <Button variant="danger"><a className='po' href="/python"> Start </a></Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
<br /> <br/>
<hr />

<a href="/"> <Button variant="warning"> <FcUp/> Back To TOP</Button> </a>
</> 
);
}