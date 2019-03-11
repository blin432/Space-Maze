import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,Container,Row,Col,Alert } from 'react-bootstrap';
// import './SignIn.css';
// import Modal from 'react-bootstrap/Modal';
// import {data} from '../signUpData.js';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      show:false
    }
  }


  login(e){
    e.preventDefault()
    let { username, password } = this.state
      axios.post('/users/login', { 
      username, 
      password}).then((response) =>{
        this.props.history.push("/play")
        console.log(response)
      }).catch((error) =>{console.log(error)
        this.setState({show:true})
      });
  }

  handleUsernameInput(input){
    this.setState({username: input})
  }

  handlePasswordInput(input){
    this.setState({password: input})
  }

  handleHide(){
    this.setState({ show: false });
  }
  cancel(){
    this.props.history.push("/showSignUp");
  }


render() {
  return (
    <Container className="text-center" style={{maxWidth: '400px'}}>
      <Row>
        <Col>
          <h3 className="mt-5">Log In</h3>
          <Alert show={this.state.show}  onClose variant="danger">
                  <Alert.Heading>Error In Logging In</Alert.Heading>
                  <p>
                    Password or username incorrect
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => this.handleHide()} variant="outline-success">
                      Okay
                    </Button>
                  </div>
          </Alert>

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
              <Button style={{display:"block"}} className = "mt-3 mr-2"variant="outline-secondary" type="submit"> Log In</Button>
              <Button style={{display:"block"}} className = "mt-3 ml-2"variant="outline-secondary" onClick={() => this.cancel()}> Cancel</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Login;

