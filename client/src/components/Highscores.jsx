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

   
render() {
    let scoresRendered = this.state.scores.map((score,i)=> <Scores key={i} {...score} />);

  return (
      <div>
        <Col style={{margin:'0 auto'}}>
            <h4 className="pt-3" style={{textDecoration:"underline"}}>Leader Board</h4>
            <Row className='d-flex justify-content-between'>
                <div className="username text-center ml-3">
                    <h5 style={{textDecoration:'underline'}}>Player</h5>
                </div>
                <div className="score text-center mr-3" >
                    <h5 style= {{textDecoration:'underline'}}>Best Time</h5>
                </div>
            </Row>
            {scoresRendered}  
        </Col>
        
    </div>
  );
}
}

export default Highscores;

