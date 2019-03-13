import React, {Component} from 'react';
import '../App.css';
import Timer from 'react-compound-timer';


class GameTimer extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }

    render(){ 

        return(
            <div style={{backgroundColor: "white",width:'500px', margin:'0'}}>
            <Timer
    initialTime={0}
    startImmediately={false}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
            </div>
            <div style={{color:"white"}}>{timerState}</div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>   
</div>     
        )
    }
}

export default GameTimer;