import React,{Component} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import Player from './Player.jsx';
import '../App.css';
import up from '../up.png'
import down from '../down.png'
import left from '../left.png'
import right from '../right.png'
import  {lv1, lv2 ,lv3 ,lv4, lv5} from '../maps.js';
import Tile from '../components/Tile.jsx';


class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid : lv5,
            myPosition: null,
            pointing : up
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => this.move(e));
        this.spawn()
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.move(e));
    }

    spawn(){
        let newGrid = [...this.state.grid]
        let randomIndex = Math.floor(Math.random()*newGrid.length);
        newGrid[randomIndex] = 2;
        this.setState({grid : newGrid, myPosition: randomIndex})
    }

    calculateNewPosition(movement,pointTo){
        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;
        if(updatedGrid[endPosition] === 1){
            return
        }
        updatedGrid[endPosition] = updatedGrid[this.state.myPosition] 
        updatedGrid[this.state.myPosition] = 0;
        this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
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

        let field = this.state.grid.map((tile,i) => 
        <Col key={i} style={{margin : '5px'}}>
        {tile === 0 || tile === 1? <Tile passable={tile === 1 ? false : true}/> : <Player pointing={this.state.pointing}/>}
        </Col>)

        return(
            <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
                <Row>{field}</Row >
            </Container>
        )
    }
}

export default Field