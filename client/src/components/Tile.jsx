import React,{Component} from 'react';
import Rock from '../Boundary.png';
import Space from '../space.jpg';
import Asteroid from '../asteroid.png';
class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            passable : this.props.passable
        }
    }

    render(){
        let spaceDebris = [Rock,Asteroid]
        return(
        <img style={{ backgroundColor : 'black'}} src={this.state.passable === false ? Rock : Space } style={{height: 30, width: 30 }} alt={'tile'}/>
        )
    }
}

export default Tile