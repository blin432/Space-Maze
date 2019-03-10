import React, { Component } from 'react';
import axios from 'axios';
import { Button,Modal,Row,Col } from 'react-bootstrap';



class Scores extends Component {
  constructor(props){
    super(props)
  }
  
render() {
   console.log(this.props)
  return (
        <Row className='d-flex justify-content-between mt-1 mb-1'>
                <div className="username text-center">
                    <h5>{this.props.username}</h5>
                </div>
                <div className="score text-center mr-5 " >
                    <p>{this.props.points}</p>
                </div>
        </Row>
    )
  }
}

export default Scores;

