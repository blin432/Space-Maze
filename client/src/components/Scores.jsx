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
        <Row>
              <div className="username text-center">
                  <h5>{this.props.username}</h5>
              </div>
              <div className="score text-center" style={{marginLeft:"70px"}}>
                  <p>{this.props.points}</p>
              </div>
        </Row>
  );
}
}

export default Scores;

