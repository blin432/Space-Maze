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


class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid : lv5,
            myPosition: null,
            pointing : up,
            show:false
        }
    }

    componentDidMount() { 
        document.addEventListener("keydown", (e) => this.move(e));
        this.spawnShip();
        
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.move(e));
    }

    spawnShip(){
        let newGrid = [...this.state.grid]
        let randomIndex = Math.floor(Math.random()*newGrid.length);
        newGrid[randomIndex] = 2;
        newGrid[0]=3;
        this.setState({grid : newGrid, myPosition: randomIndex})
    }
   
   
    handleClose() {
        this.setState({ show: false });
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
          
        switch( keyCode ) {
            case 37:
                console.log(this.state.myPosition)
                if(this.state.myPosition % 5 === 0){
                    return
                }
                this.calculateNewPosition(-1,left);
                break;
            case 38:
            console.log(this.state.myPosition)
                if(this.state.myPosition -5 < 0 ){
                    return
                }
                this.calculateNewPosition(-5,up)
                break;
            case 39:
            console.log(this.state.myPosition)
                for(let i = this.state.myPosition; i >= 4; i-=5){
                    if(i == 4 ){ 
                        return
                    }
                }
                this.calculateNewPosition(+1,right)
                break;
            case 40:
            console.log(this.state.myPosition)
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

        return(
            <Container style={{maxWidth: 400, backgroundColor : 'black'}}>

                <Row>{field}</Row >
                <Alert show={this.state.show} onClose={handleHide} variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleHide} variant="outline-success">
                        Close me ya'll!
                        </Button>
                    </div>
                </Alert>
                
            </Container>
        )
    }
}

export default Field;