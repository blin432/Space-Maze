import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,InputGroup,FormControl,Container,Row,Col } from 'react-bootstrap';
// import './SignIn.css';
import {data} from '../signUpData.js';

class SignIn extends Component {
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
      <Container className="m-5 text-center">
        <Row>
          <Col xs={12} sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 4 }}>
         <div>
            <h3 className="m-3">Sign Up To Play Now</h3>
            <Form onSubmit={(e) => this.signUp(e)}>
            {data.map((PII, i) =>
            <InputGroup  >
              <FormControl
                id={data.id}
                aria-label={data.ariaLabel}
                value={this.state.username}
                onChange={data.onChange}
              />
            </InputGroup>
            )}

            <Button className="m-4" type="submit">Complete Sign Up</Button>
          <div className="m-4">
            <p className= "m-4">Already a Member?</p>
            <Button className = "m-4" variant="outline-secondary" onClick={() => this.loginShow()}> Login in Here</Button>
          </div>  
        </Form>
        </div> 
        </Col>
        </Row>
    </Container>
    );
  }
}

export default SignIn;
