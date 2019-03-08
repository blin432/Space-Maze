import React, {Component} from 'react';
import '../App.css';
import { Button,Form,InputGroup,FormControl,Container,Row,Col } from 'react-bootstrap';

class Home extends Component{
   
    constructor(props){
        super(props)
        this.state={
          
        }
    }

    render(){
        return (

            <Container className="m-5 text-center">
                <Col xs={12} sm={12} md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 2 }}>
                    <h1 className="m-3">Welcome to The Reactor</h1>
                    <h3 className="m-3">Sign Up to start playing!</h3>
                    </Col>    
            </Container>
          );
        }
      }

export default Home;