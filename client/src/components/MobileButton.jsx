import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import '../css/MobileButton.css'
import {buttons} from '../js/mobileButton';
class MobileButton extends Component {
  
  render() {
    return (
      <div className="mobile" style={{opacity : '0.075'}}>
        {buttons.map((button,i) => 
        <Row key={i} 
          className={button.positioning} 
          style={{height:"100px", witdh:"100px"}} 
          src={button.pic} 
          onClick={(e) => this.props.move({keyCode:buttons.keyCode})}/>)}
      </div>
    )
  }
}
export default MobileButton;
