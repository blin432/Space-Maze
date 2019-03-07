import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './SignIn.css';
import Modal from 'react-bootstrap/Modal'

class AvatarModal extends Component {
  constructor(props){
    super(props)
    this.state={
      show:false
    }
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className="d-flex flex-row justify-content-center mt-4">
            <h5 className="mt-1">Choose Your Avatar:</h5>
            <Button className="ml-4" variant="primary" onClick={() => this.handleShow()}>
                Click to Choose Avatars
            </Button>
            <Modal show={this.state.show} onHide={() => this.handleClose()}>
              <Modal.Header closeButton>
                <Modal.Title>Choose Your Avatar</Modal.Title>
              </Modal.Header>
              <Modal.Body className="d-flex">
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
                <div style={{backgroundColor:"black", width:"100px",height:"100px",margin:"5px"}}>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleClose()}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => this.handleClose()}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
    );
  }
}

export default AvatarModal;
