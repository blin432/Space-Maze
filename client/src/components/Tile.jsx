import React,{Component} from 'react';
import Rock from '../Boundary.png';
import Space from '../space.jpg';
import Asteroid from '../asteroid.png';
import Down from '../down.png';
class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            passable : this.props.passable,
            finish:this.props.finish
        }
    }

    render(){

        let renderedObject= ()=>{
            if (this.state.finish ===false){
                return Down;
            } else if(this.state.passable ===false){
                return Rock;
            }else if(this.state.passable ===true){
                return Space;
            }
            
        };
        return(
        <img style={{ backgroundColor : 'black'}} src={renderedObject() } style={{height: 30, width: 30 }} alt={'tile'}/>
        )
    }
}

export default Tile