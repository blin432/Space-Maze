import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Nav, Row, Col} from 'react-bootstrap';
import {levels} from '../js/maps.js';
class Highscores extends Component {
  constructor(props){
    super(props)
    this.state = {
      scores : [],
      grid : this.props.grid,//not used
      level : this.props.level

    }
    ///grabs the current Level
    this.levelToRender = levels.indexOf(this.props.level)+1;
}
     

  componentDidMount(e){
    // let levelToRender = levels.indexOf(this.props.level)+1;
    console.log(this.levelToRender);
    axios.get('/scores/highscores').then((response)=>{
      //finding the all results that are in level 3
      let result = response.data.filter( (word,i) => word.level === this.levelToRender);
      console.log(result);
      this.setState({
        scores:result
      })
    }).catch(err => console.log(err))
  }
  componentWillUnmount() {
    
   
    
}
   
render() {
    let level= this.levelToRender;
    let {scores} = this.state

    let players = scores.map((player,i) => <p key={i}>{player.username}</p>)
    let times = scores.map((score,i) => <p key={i}>{score.points}</p>)

  return (
    <Col className="justify-content-center mt-3" style={{ margin : 0, padding: 0 }}>
      <Row className="d-none d-md-block"><h3 className="m-3">Level {level} Leader Board</h3></Row>
        <Navbar expand="md" className="justify-content-between">
          <Row className="d-md-none d-block"><h3 className="m-3">Level {level} Leader Board</h3></Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Row className="justify-content-between text-center">
                    <Col>
                      <h5 style={{textDecoration:'underline'}}>Player</h5>
                      {players}
                    </Col>
                    <Col>
                      <h5 style= {{textDecoration:'underline'}}>Score</h5>
                      {times}
                    </Col>
                  </Row>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>);
        }
      }

export default Highscores;


