import React, {Component} from 'react';
// import up from '../up.png'
// import down from '../down.png'
// import left from '../left.png'
// import right from '../right.png'
import '../App.css';

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
            pointing: this.props.pointing,
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.pointing !== prevProps.pointing){
            this.setState({pointing : this.props.pointing});
        }
    }
    

    render(){
        return(
            <img src={this.state.pointing} style={{height: 30, width: 30}} alt={'rocket'}/>
        )
    }
}

export default Player;