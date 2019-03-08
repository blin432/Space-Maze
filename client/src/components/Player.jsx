import React, {Component} from 'react';
import '../App.css';

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
            health: 100,
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.pointing !== prevProps.pointing){
            this.fetchData(this.props.pointing);
        }
    }
    

    render(){
        return(
            <img src={this.props.pointing} style={{height: 30, width: 30}} alt={'rocket'}/>
        )
    }
}

export default Player;