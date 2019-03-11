import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import './SignIn.css';
import {data} from '../signUpData.js';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
    }
  }

  signUp(e){
    e.preventDefault()
    let { username, password } = this.state
      axios.post('/users/register', { 
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
  
  render() {
    return (
      <Container className="text-center" xs={12} md={{ size: 4, offset: 8 }}  style={{maxWidth: '400px'}}>
        <Row>
          <Col className="mt-5">
              <h3 className="mb-5">Sign Up</h3>
              <Form onSubmit={(e) => this.signUp(e)}>
                  <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.username}  onChange={(e) => this.handleUsernameInput(e.target.value)}/>
                  </Form.Group>
                  <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={(e) => this.handlePasswordInput(e.target.value)} />
                  </Form.Group>
                  <Button className="m-4" type="submit">Register</Button>
                  <div className="m-4">
                    <p className= "m-4">Already a Member?</p>
                    <NavLink to="/showLogIn"><Button variant="primary">Login</Button></NavLink>
                  </div>  
              </Form> 
         </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
