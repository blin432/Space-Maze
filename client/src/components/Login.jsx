import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,InputGroup,FormControl,Container,Row,Col } from 'react-bootstrap';
// import './SignIn.css';
import Modal from 'react-bootstrap/Modal';
import {data} from '../signUpData.js';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
    }
  }
  login(e){
    e.preventDefault()
    let { username, password } = this.state
      axios.post('/users/login', { 
      username, 
      password}).then((response) => console.log(response))
      .catch((error) => console.log(error))
  }
  
//   
render() {
  return (
    <Container className="m-5 text-center">
      <Row>
        <Col xs={12} sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 4 }}>
       <div>
          <h3 className="m-3">Login To Play Now</h3>
          <Form onSubmit={(e) => this.login(e)}>
            <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex justify-content-center" >
              <Button style={{display:"block"}} className = "mt-3 mr-2"variant="outline-secondary" onClick={() => this.login()}> Login</Button>
              <Button style={{display:"block"}} className = "mt-3 ml-2"variant="outline-secondary" onClick={() => this.loginShow()}> Cancel</Button>
            </div>
        </Form>
      </div> 
      </Col>
      </Row>
  </Container>
  );
}
}

export default Login;

