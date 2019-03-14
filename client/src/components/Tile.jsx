import React,{Component} from 'react';

class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            type : this.props.type,
            pointing: this.props.pointing
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.pointing !== prevProps.pointing){
            this.setState({pointing : this.props.pointing});
        }
    }

    render(){
        let { type, pointing } = this.state
        return(
        <img src={type === 'player' ? pointing : type} 
        style={{height: 30, width: 30, backgroundColor : 'black' }} 
        alt={'tile'}/>
        )
    }
}

export default Tile