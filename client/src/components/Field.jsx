import React,{Component} from 'react';
import {Container,Row, Col,Alert,Button} from 'react-bootstrap';
import Player from './Player.jsx';
import '../App.css';
import up from '../up.png'
import down from '../down.png'
import left from '../left.png'
import right from '../right.png'
import  {lv1, lv2 ,lv3 ,lv4, lv5} from '../maps.js';
import Tile from '../components/Tile.jsx';
import Rock from '../Boundary.png';
import Space from '../space.jpg';
import axios from 'axios';
import Highscores from './Highscores.jsx';
import MobileButton from './MobileButton.jsx';
import './MobileButton.css'


class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid : lv5,
            myPosition: null,
            pointing : up,
            show:false,
            username:'',
            time:123, ///harded code, after refactoring will have to set state 
           
        }
    }
    
    componentDidMount() {
        
        console.log(this.props.match);
        //checks to see if user is logged in when page loads
        // if it is logged in set username to current username
        //if not go back to home page
        axios.get('/users/status').then((response) =>{
            console.log(response)
            let status= response.data.isLoggedIn;
            if (!status){
                this.props.history.push('/');
            }else {
                
                return this.setState({
                    username:response.data.username
                })
            }
        }).catch((error) => {
                
              console.log(error)
            });
        document.addEventListener("keydown", (e) => this.move(e));
        this.spawnShip();
        

        
        
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.move(e));
        ///
        
    }


    
    //////////
    //click event to post high score
    postHighScore(){
        let username = this.state.username;
        let points = this.state.time;
        axios.post('/scores/record',{username:username,
            points:points
        }).then((response) =>{
            console.log(response)
        }).catch((error) => {
              console.log(error)
            });
    }
    spawnShip(){
        let newGrid = [...this.state.grid]
        let randomIndex = Math.floor(Math.random()*newGrid.length);
        newGrid[randomIndex] = 2;
        newGrid[0]=3;
        this.setState({grid : newGrid, myPosition: randomIndex})
    }
   
   
    handleClose(e) {
        console.log(e);
        // this.setState({ show: false, grid: lv4 });
        
        // let newGrid = [...this.state.grid]
        // let randomIndex = Math.floor(Math.random()*newGrid.length);
        // newGrid[randomIndex] = 2;
        // newGrid[0]=3;
        // this.setState({grid : newGrid, myPosition: randomIndex})
        
        
        
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    calculateNewPosition(movement,pointTo){
        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;
        if(updatedGrid[endPosition] === 1){
            return 
        } else if (updatedGrid[endPosition] === 0 || updatedGrid[endPosition] ===3 ){
            if(updatedGrid[endPosition] ===3){
                console.log("finished")
                this.setState({ show: true });
            }
        updatedGrid[endPosition] = updatedGrid[this.state.myPosition];
        updatedGrid[this.state.myPosition] = 0;}

        this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
    } 
    
    move({keyCode}){
        console.log({keyCode});
          
        switch( keyCode ) {

            case 37:
                if(this.state.myPosition % 5 === 0){
                    return
                }
                this.calculateNewPosition(-1,left);
                console.log(keyCode);
                break;
            case 38:
                if(this.state.myPosition -5 < 0 ){
                    return
                }
                this.calculateNewPosition(-5,up)
                break;
            case 39:
                for(let i = this.state.myPosition; i >= 4; i-=5){
                    if(i == 4 ){ 
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
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        
        let field = this.state.grid.map((tile,i) => 
        <Col key={i} style={{margin : '5px'}}>
        {tile === 0 || tile === 1 || tile===3? <Tile  finish={i===0 ? false : true} passable={tile===1 ? false : true}/> : <Player pointing={this.state.pointing}/>}
        </Col>)
        
           return ( <div>
                {/* rendering highScores here */}
            <Container className="text-center" style={{maxWidth: 400, backgroundColor:'lightblue'}}>
                <Col  classname="text-center" style={{margin : '5px'}}>

                    {/* Highscores has a Scores compononent that is passed down a state of scores in an array */}
                    <Highscores/>
                </Col>
            </Container>

              {/* added this button to post highscores, afer refactoring will probably be in a prompt/alert */}
                <Button onClick={() => this.postHighScore()}>Post HighScore</Button>

            <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
                <Alert show={this.state.show} onClose={handleHide} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={(e)=>this.handleClose(e)} variant="outline-success">
                        Close me ya'll!
                        </Button>
                    </div>
                </Alert>
                <Row>{field}</Row >
                
            </Container>

           {/* component for mobile arrow functions passed the "move" function down to MobileButton */}
            <MobileButton move = {this.move.bind(this)}/>
          
            </div>
           )
    
            
        
    }
}

export default Field