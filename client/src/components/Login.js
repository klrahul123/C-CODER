import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie'
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import './cs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

export default function Login() {


  const history = useHistory();

  const [email, setEmail] = useState('');
  const [cpassword, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, cpassword
      })
    });
    const data = await res.json();
    console.log(data)
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");

    } else {
      window.alert("Login successfull");
      //localStorage.setItem('jwtoken',data.jwtoken)
      const cookie = new Cookies();
      cookie.set('jwtoken', data.jwtoken)
      history.push("/");
    }




  }

  return (
    <div className="aa">
      <br /> <br />
      <Container className='ab'>
        <Row className='ac'>


          <Col sm={4} className="ae">


            <Form method="POST">
              <h5 className="af">Login</h5> <hr /> <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                  value={cpassword}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" required />
              </Form.Group>
              <Button variant="primary" onClick={loginUser} type="submit" className="ag">
                Submit
              </Button>
              <br /> <br />

              <p className="da"> Not Register Yet? <a href="/contact" className="ett">Register</a> </p>
            </Form>




          </Col>
          <Col className="second" sm={8}>

          </Col>
        </Row>
      </Container>






    </div>
  );
}