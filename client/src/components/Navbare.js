import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Form, Button, FormControl, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Content from "./Content";
import Login from "./Login";
import Contact from './Register';
import Errorpage from './Errorpage';
import Logout from "./Logout";
import Help from "./Help";
import './cs.css';





export default function Navbare() {
    return (
      <Router>
      <div>

      <Navbar  expand="lg" bg="dark" variant="dark">
  <Container fluid >
    <Navbar.Brand>C++ CODER</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '120px'  }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/C-CODER"}  >Home</Nav.Link>
        <Nav.Link as={Link} to={"/content"}>Content</Nav.Link>
        <Nav.Link as={Link} to={"/help"}>Help</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Register</Nav.Link>
       
        
        <Nav.Link as={Link} to={"/login"}>login</Nav.Link>
        
       
     
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
      </div>
      <div>

      <Switch>
      <Route exact path="/C-CODER">
        <Home/>
      </Route>

       

          <Route exact path="/content">
            <Content />
          </Route> 
          

          <Route exact path="/help">
            <Help/>
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          
          <Route exact path="/logout">
            <Logout />
          </Route>
          
          <Route >
            <Errorpage />
          </Route>
          
        </Switch>

      </div>
      </Router>
    );
  }