import React,{Component} from 'react';
import {Container, Row, Col,} from 'react-bootstrap';
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
import ms from 'pretty-ms';


class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid : levels[0],
            level : levels[0],
            myPosition: null,
            pointing : up,
            show:false,
            username:'',
            modalShow : false,
            time: 0,
            isOn: false,
            start: 0
            
        }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
}
    
              
    componentDidMount(){
        document.addEventListener("keydown", (e) =>{
            // this.startTimer(); use this to trigger timer on key down
            this.move(e); 
        } );
        this.setState({myPosition : this.state.grid.indexOf(Player)})
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) =>{
           this.move(e); 
        } );
       
        
    }

    postHighScore(){
        let {username} = this.state;
        let time = this.state.time/1000;
        console.log(time);
        let currentLevel = levels.indexOf(this.state.level)+1;
        console.log(currentLevel);
        axios.post('/scores/record',{points:time,username:username,level:currentLevel})
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
    
    startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
      }
      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState({time: 0, isOn: false})
      }

      /////////////////////
    

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
                this.postHighScore();
                let currentLevel = levels.indexOf(this.state.level);
                console.log(currentLevel);
                let nextLevel = levels[currentLevel+1];
                clearInterval(this.timer);
                this.setState({
                    grid : nextLevel,
                    modalShow:true,
                    level : nextLevel, 
                    myPosition : nextLevel.indexOf(Player),
                    time: 0, 
                    isOn: false
                });
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
            let level=this.state.level;
            let start = (this.state.time == 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
      
            let field = this.state.grid.map((tile,i) => 
            <Col key={i} style={{margin : '5px'}}>
            {tile === Player ? <Player pointing={this.state.pointing}/> : <Tile type={tile}/>}</Col>)
                
        return(
        <Container>
            <div>
                <h3>timer: {ms(this.state.time)}</h3>
                {start}
            </div>
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
                        {/* this Highscores Component is causing componentDidMount in the HighScore component 
                            to render twice. I am assuming this component is for mobile. */}
                            {/* <Highscores level={this.state.level}/> */}
                        </div>
                    </Col>

                    <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
                        <Row>{field}</Row >
                    </Container>
                
                    <Col sm={12} md={3}>
                        <div className="d-none d-md-block" >
                           
                            <Highscores level={level}/>
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

    
            
        



