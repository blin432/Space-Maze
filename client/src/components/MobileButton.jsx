import React, { Component } from 'react';
import axios from 'axios';
import { Button,Form,InputGroup,FormControl,Container,Row,Col } from 'react-bootstrap';
import './MobileButton.css'
// import './SignIn.css';
// import Modal from 'react-bootstrap/Modal';
// import {data} from '../signUpData.js';

class MobileButton extends Component {
  
  render() {
    return (
      <div className="mobile" style={{opacity : '0.075'}}>
        <Row className="pt-4 d-flex justify-content-center" >
            <img style={{height:"100px", witdh:"100px"}}src="https://www.shareicon.net/data/128x128/2016/11/09/851194_arrows_512x512.png" onClick={(e) => this.props.move({keyCode:38})}></img>
        </Row>
        <Row className="d-flex justify-content-center">
          <img className="mr-5" style={{height:"100px", witdh:"100px"}}src="https://www.shareicon.net/data/128x128/2016/11/09/851210_arrows_512x512.png" onClick={(e) => this.props.move({keyCode:37})}></img>
          <img className="ml-5" style={{height:"100px", witdh:"100px"}}src="https://www.shareicon.net/data/128x128/2016/11/09/851191_arrows_512x512.png" onClick={(e) => this.props.move({keyCode:39})}></img>
        </Row>
        <Row className="pb-4 d-flex justify-content-center">
          <img style={{height:"100px", witdh:"100px"}} src="https://www.shareicon.net/data/128x128/2016/11/09/851184_multimedia_512x512.png"onClick={(e) => this.props.move({keyCode:40})} ></img>
        </Row>
      </div>
    )
  }
}
export default MobileButton;
