import React,{Component} from 'react';
import {Container, Row, Col,} from 'react-bootstrap';
import player from './Player.jsx';
import Player from './Player.jsx';
import '../css/App.css';
import finish from '../images/finishline.gif';
import up from '../images/up.png'
import down from '../images/down.png'
import left from '../images/left.png'
import right from '../images/right.png'
import {levels} from '../js/maps.js';
import Tile from './Tile.jsx';
import GameTimer from './Timer.jsx';
import rock from '../images/Boundary.png';
import space from '../images/space.jpg';
import axios from 'axios';
import Highscores from './Highscores.jsx';
import MobileButton from './MobileButton.jsx';
import '../css/MobileButton.css'
import Tips from './Tips.jsx';

class Field extends Component {
    state = {
            grid : levels[4],
            level : levels[4],
            myPosition: null,
            pointing : up,
            show:false,
            username:'',
            time:123,
            modalShow : true
        }
              
    componentDidMount(){
        document.addEventListener("keydown", (e) => this.move(e));
        this.setState({myPosition : this.state.grid.indexOf(player)})
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.move(e));
    }

    postHighScore(){
        let {username, time} = this.state

        axios.post('/scores/record',{username ,points: time})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    // spawnShip(){
    //     let newGrid = [...this.state.grid]
    //     let randomIndex = Math.floor(Math.random()*newGrid.length);
    //     newGrid[randomIndex] = 2;
    //     newGrid[0]=3;
    //     this.setState({grid : newGrid, myPosition: randomIndex})
    // }
   
    calculateNewPosition(movement,pointTo){
        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;

        switch(updatedGrid[endPosition]){
            case rock :
                return
            case space :
                updatedGrid[endPosition] = updatedGrid[this.state.myPosition];
                updatedGrid[this.state.myPosition] = space
                this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
                return
            case finish :
                let currentLevel = levels.indexOf(this.state.level)
                let nextLevel = levels[currentLevel-1]
                this.setState({grid : nextLevel, level : nextLevel, myPosition : nextLevel.indexOf(player)});
                return
            default:
                return
        }
    }
    
    move({keyCode}){

        switch( keyCode ) {
            case 37:
                if(this.state.myPosition % 5 === 0){
                    return
                }
                this.calculateNewPosition(-1,left);
                break;
            case 38:
                if(this.state.myPosition -5 < 0 ){
                    return
                }
                this.calculateNewPosition(-5,up)
                break;
            case 39:
                for(let i = this.state.myPosition; i >= 4; i-=5){
                    if(i === 4 ){ 
                        return
                    }
                }
                this.calculateNewPosition(+1,right)
                break;
            case 40:
                if(this.state.myPosition + 5 > this.state.grid.length){
                    return
                }
                this.calculateNewPosition(+5,down)
                break;
            default: 
                break;
        }
    }
    
        render(){

            let field = this.state.grid.map((tile,i) => 
            <Col key={i} style={{margin : '5px'}}>
            {tile === player ? <Player pointing={this.state.pointing}/> : <Tile type={tile}/>}</Col>)
                
        return(
        <Container>
            <GameTimer/>
                <Row style={{margin : 0, padding: 0}}>
                    <Col className="justify-content-center mt-3" 
                        sm={12} 
                        md={{size:3}} 
                        style={{ margin : 0, padding: 0}}>
                        <div className="d-none d-md-block" >
                            <h3 className="text-center">Tips</h3>
                        </div>
                        <Tips/>
                        <div className="d-md-none">
                            <Highscores />
                        </div>
                    </Col>

                    <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
                        <Row>{field}</Row >
                    </Container>
                
                    <Col sm={12} md={3}>
                        <div className="d-none d-md-block" >
                            <Highscores />
                        </div>
                    </Col>
                </Row>
            <div className="d-md-none" style={{marginTop : '-800px'}}>
                <MobileButton move={this.move.bind(this)}/>
            </div>
        </Container>
        )
    }
}

export default Field;

    
            
        



