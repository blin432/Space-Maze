import React, {Component} from 'react';
import '../App.css';
import Timer from 'react-compound-timer';


class GameTimer extends Component{

    constructor(props) {
        super(props);
        this.state = {};
      }
    
      Start = (start) => () => {
        console.log('My Start function');
        start()
     }
    

    render(){ 

        return(
            <Timer>
            initialTime={55000}
            startImmediately={true}
        >
            {({ start,stop}) => (
                <React.Fragment>
                    <div>
                        <Timer.Minutes /> minutes
                    </div>
                    <div>{Timer}</div>
                    <br />
                    <div>
                    <button onPress={this.Start(start)}>                        
                    <p>{"start"}</p>    
                    </button>
                        <button onPress={stop}>Stop</button>
                    </div>
                </React.Fragment>
            )}
        </Timer>           
        )
    }
}

export default GameTimer;