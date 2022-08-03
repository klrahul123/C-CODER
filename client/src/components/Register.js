import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cs.css'


export default function Register() {

  let name, value;
  const history = useHistory();

  const [user, setUser] = useState({
    name: "", email: "", cpassword: ""
  })

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });

  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, cpassword } = user;


    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, cpassword
      })
    })

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successful registration");
      console.log("Successful registration");

      history.push("/login");
    }




  }

  return (
    <div className="aa">
      <br /> <br />
      <Container className="ab">
        <Row className="ac">
          <Col sm={4} className="ae">
              <br/>
            <Form method="POST">
              <h5 className="af">Register</h5> <hr /> <br />
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Your Name"
                  value={user.name}
                  onChange={handleInputs}
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email"
                  value={user.email}
                  onChange={handleInputs}
                  className='email'
                  required />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control type="password" name="cpassword" placeholder="Confirm Your Password"
                  value={user.cpassword}
                  onChange={handleInputs}
                  required />
              </Form.Group>

              <Button variant="primary" type="submit" className="agg" onClick={PostData} >
                Register
              </Button>

              

            </Form>
            </Col>
            <Col sm={8} className="rahul">

            </Col>


        </Row>
      </Container>


















    </div>
  );
}