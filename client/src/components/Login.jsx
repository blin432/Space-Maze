import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col } from 'react-bootstrap';
// import './SignIn.css';
// import Modal from 'react-bootstrap/Modal';
// import {data} from '../signUpData.js';

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
    <Container className="m-5 text-center">
      <Row>
        <Col xs={12} sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 4 }}>
          <h3 className="m-3">Login To Play Now</h3>
          <Form onSubmit={(e) => this.login(e)}>
            <Form.Group >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={this.state.username}  onChange={(e) => this.handleUsernameInput(e.target.value)}/>
            </Form.Group>
            <Form.Group >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={this.state.password} onChange={(e) => this.handlePasswordInput(e.target.value)} />
            </Form.Group>
            <div className="d-flex justify-content-center" >
              <Button style={{display:"block"}} className = "mt-3 mr-2"variant="outline-secondary" type="submit"> Login</Button>
              <Button style={{display:"block"}} className = "mt-3 ml-2"variant="outline-secondary" onClick={() => this.loginShow()}> Cancel</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Login;

