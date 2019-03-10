import React,{Component} from 'react';
import Rock from '../Boundary.png';
import Space from '../space.jpg';
import Asteroid from '../asteroid.png';
// import { clearScreenDown } from 'readline';
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
let mapStateToProps = (state) =>(
    { 
        grid : state.grid,
        myPosition: state.myPosition,
        pointing : state.pointing,
    
    }
)

let mapDispatchToProps = (dispatch) =>(
    {
       addColor: () => dispatch({type:'ADDCOLOR'}),
       skipColor: () => dispatch({type: 'SKIPCOLOR'})
    }
)
export default Tile