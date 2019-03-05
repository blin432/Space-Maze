import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import Tile from './Tile.jsx';

class TileRow extends Component {
    constructor(props){
        super(props)
        this.state = {
            tileRow: [ '1','2','3']
        }
    }

    render(){

        return(
            <Container>
                <Row>{[...this.state.tileRow].map((tile) => tile)}</Row>
            </Container>
        )
    }
}

export default TileRow;