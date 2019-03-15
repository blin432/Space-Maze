import React, {Component} from 'react';
import '../css/App.css';
import Timer from 'react-compound-timer';
import {Button, Row, Col} from 'react-bootstrap';
import ms from 'pretty-ms';
class GameTimer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: this.props.time,
            isOn: this.props.isOn,
            start: this.props.start

        }
        this.startTimer = this.startTimer.bind(this);
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
    render(){ 
        let start = (this.state.time == 0) ?
        <button onClick={() => this.state.startTimer()}>start</button> :
        null
      

        return(
            <Timer initialTime={0} startImmediately={false}>
            {({ start}) => (
            <React.Fragment>
                <Row className="text-center m-2">
                    <Col className="text-center">
                        <Button onClick={start} 
                        className="m-1" 
                        style={{height:40}}>Start</Button>
                        <h5 className="d-inline"> Your time 
                        <div>
                            <h3>timer: {ms(this.state.time)}</h3>
                            {start}
                        </div>
                        </h5>
                    </Col>
                </Row>
            </React.Fragment>)}
            </Timer>
        )
    }
}

export default GameTimer;