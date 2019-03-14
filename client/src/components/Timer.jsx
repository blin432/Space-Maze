import React, {Component} from 'react';
import '../css/App.css';
import Timer from 'react-compound-timer';
import {Button, Row, Col} from 'react-bootstrap';
class GameTimer extends Component{

    render(){ 

        return(
            <Timer initialTime={0} startImmediately={false}>
            {({ start}) => (
            <React.Fragment>
                <Row className="text-center m-2">
                    <Col className="text-center">
                        <Button onClick={start} 
                        className="m-1" 
                        style={{height:40}}>Start</Button>
                        <h5 className="d-inline"> Your time <Timer.Minutes />: <Timer.Seconds /></h5>
                    </Col>
                </Row>
            </React.Fragment>)}
            </Timer>
        )
    }
}

export default GameTimer;