import React, { Component } from 'react';
// import axios from 'axios';
import { Row, Col } from 'react-bootstrap';



class Scores extends Component {
  
render() {
    console.log(this.props)
  return (
        <Row className="text-center">
          <Col>
              <p>{this.props.username}</p>
          </Col>
          <Col>
              <p>{this.props.points}</p>
          </Col>
        </Row>
    )
  }
}

export default Scores;

