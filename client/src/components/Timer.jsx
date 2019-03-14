import React, {Component} from 'react';
import '../App.css';
import Timer from 'react-compound-timer';
import {Button, Row, Container, Col} from 'react-bootstrap';


class GameTimer extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }

    render(){ 

        return(
            <Timer initialTime={0} startImmediately={false}>
            {({ start,stop,timerState }) => (
            <React.Fragment>
                <Row className="text-center m-2">
                <Col className="text-center">
                    <Button onClick={start} className="m-1" style={{height:40}}>Start</Button>
                    {/* <Button onClick={stop} className="m-1" style={{height:40}}>Stop</Button> */}
                    <h5 className="d-inline"> Your time <Timer.Minutes />: <Timer.Seconds /></h5>
                    </Col>
                </Row>
            {/* <div style={{color:"white"}}>{timerState}</div> */}
            </React.Fragment>)}
            </Timer>
      
        )
    }
}

export default GameTimer;