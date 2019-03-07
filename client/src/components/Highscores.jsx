import React, { Component } from 'react';
import axios from 'axios';
import { Button,Modal,Row,Col,Container } from 'react-bootstrap';
import Scores from './Scores.jsx';



class Highscores extends Component {
  constructor(props){
    super(props)
    this.state={
        scores:[]
    }
  }
  async componentDidMount(){
      
    axios.get('/scores/highscores').then((response)=>{
      console.log(response);
      this.setState({
          scores:response.data
      })
    })
}
  submitHighScore(){
      axios.post('/scores/record').then((response) =>{
        console.log(response);
      } )
      .catch((error) => console.log(error))
  }
   
render() {
    let scoresRendered = this.state.scores.map((score,i)=> <Scores key={i} {...score} />);

  return (
      <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Your Score</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>1080</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" onClick={(e) => this.submitHighScore(e)}>Submit Score</Button>
                </Modal.Footer>
        </Modal.Dialog>
        <Col xs={4} sm={4} md={{ size: 4, offset: 4 }} lg={{ size: 4, offset: 4 }} className="text-center" style={{backgroundColor:"lightblue"}}>
            <h4 className="pt-3" style={{textDecoration:"underline"}}>Leader Board</h4>
              <Col  >
                  {scoresRendered} 
              </Col>
        </Col>
        
    </div>
  );
}
}

export default Highscores;

