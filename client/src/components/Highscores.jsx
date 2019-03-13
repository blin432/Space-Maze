import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Nav, Row,Col} from 'react-bootstrap';
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
      // console.log(response);
      this.setState({
          scores:response.data
      })
    })
}

   
render() {
    let { scores } = this.state
    let scoresRendered = this.state.scores.map((data,i)=> <Scores key={i} {...data} />);
    let players = scores.map((player,i) => <p key={i}>{player.username}</p>)
    let times = scores.map((score,i) => <p key={i}>{score.points}</p>)

  return (
<Col className="justify-content-center mt-3" style={{ margin : 0, padding: 0}}>
<Row className="d-none d-md-block"><h3 className="m-3">lv 1 Leader Board</h3></Row>
<Navbar expand="md" className="justify-content-between">
<Row className="d-md-none d-block"><h3 className="m-3">lv 1 Leader Board</h3></Row>
<Navbar.Toggle aria-controls="basic-navbar-nav"/>
<Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Row className="justify-content-between text-center">
      <Col>
          <h5 style={{textDecoration:'underline'}}>Player</h5>
          {players}
          </Col>
          <Col>
          </Col>
          <Col>
          <h5 style= {{textDecoration:'underline'}}>Score</h5>
          {times}
          </Col>
      </Row>
    </Nav>
</Navbar.Collapse>
</Navbar>
</Col>
  );
}
}

export default Highscores;


