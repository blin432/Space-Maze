import React,{Component} from 'react';
import {Col} from 'react-bootstrap';

class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOccupied: false,
            occupiedBy: '',
            index: '',
        }
    }

    render = () => (
            <Col className="m-1" style={{border: '1px solid black'}}>
                {this.state.index}
            </Col>
        )
    }

export default Tile