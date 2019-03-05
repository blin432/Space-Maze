import React,{Component} from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import Player from './Player.jsx';
import '../App.css';
import up from '../up.jpg'
import down from '../down.jpg'
import left from '../left.jpg'
import right from '../right.jpg'


class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid :[ 0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0,0,
                    0,0,0,0,0],
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
        newGrid[randomIndex] = 1;
        this.setState({grid : newGrid, myPosition: randomIndex})
    }

    calculateNewPosition(movement,pointTo){

        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;

        updatedGrid[endPosition] = updatedGrid[this.state.myPosition] 
        updatedGrid[this.state.myPosition] = 0;

        this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
    }
    
    move({keyCode}){
          
        switch( keyCode ) {
            case 37:
                if(this.state.myPosition % 7 === 0){
                    return
                }
                this.calculateNewPosition(-1,left);
                break;
            case 38:
                if(this.state.myPosition -7 < 0 ){
                    return
                }
                this.calculateNewPosition(-7,up)
                break;
            case 39:
                for(let i = this.state.myPosition; i >= 5; i-=7){
                    if(i === 5){
                        return
                    }
                }
                this.calculateNewPosition(+1,right)
                break;
            case 40:
                if(this.state.myPosition + 7 > this.state.grid.length){
                    return
                }
                this.calculateNewPosition(+7,down)
                break;
                default: 
                break;
        }
    }

    render(){
        return(
            <Container style={{maxWidth: 400}}>
                <Row >
                    {this.state.grid.map((tile,i) => <Col key={i} className="m-2">
                    {tile === 0 ? tile : <Player pointing={this.state.pointing}/>}
                    </Col>)}
                </Row >
            </Container>
        )
    }
}

export default Field