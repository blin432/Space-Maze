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
            <Timer
    initialTime={0}
    startImmediately={false}
    lastUnit="s"
    // lastUnit="seconds"
    // direction="backward"
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
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
        )
    }
}

export default GameTimer;