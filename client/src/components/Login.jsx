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
  handleUsernameInput(input){
    this.setState({username: input})
  }

  handlePasswordInput(input){
    this.setState({password: input})
  }
  
//   
render() {
  return (
    <Container className="text-center" style={{maxWidth: '400px'}}>
      <Row>
        <Col>
          <h3 className="mt-5">Log In</h3>
          <Form onSubmit={(e) => this.login(e)}>
            <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={this.state.username}  onChange={(e) => this.handleUsernameInput(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={this.state.password} onChange={(e) => this.handlePasswordInput(e.target.value)} />
            </Form.Group>
            <div className="d-flex justify-content-center" >
              <Button style={{display:"block"}} className = "mt-3 mr-2"variant="primary" type="submit"> Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Login;

