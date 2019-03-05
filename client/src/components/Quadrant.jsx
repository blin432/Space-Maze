import React,{Component} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import Tile from './Tile.jsx';

class Quadrant extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOccupied: '',
            numOfPlayersPresent: ''
        }
    }

    render(){

        let block = [ [ <Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>],
                      [ <Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>],
                      [ <Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>], 
                      [ <Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>,<Tile/>],]
        return(
            <Container>
            {block.map((row,i) => 
                <Row key={i}>
                    {row.map((tile, j) => <span key={j}>{tile}</span> )}
                </Row>)}
            </Container>
        )
    }
}

export default Quadrant