import React,{Component} from 'react';
import rock from '../Boundary.png';
import space from '../space.jpg';
import finishLine from '../finishline.gif';
// import Asteroid from '../asteroid.png';
import Down from '../down.png';
class Tile extends Component {
    constructor(props){
        super(props)
        this.state = {
            type : this.props.type,
            pointing: this.props.pointing
            // finish:this.props.finish
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.pointing !== prevProps.pointing){
            this.setState({pointing : this.props.pointing});
        }
    }

    render(){


        let { type, pointing } = this.state
        // let tileToRender = ()=> {

        //     switch(type){
        //         case 'space':
        //         case 'rock' :
        //     }
        //     if (this.state.finish ===false){
        //         return Down;
        //     } else if(this.state.passable ===false){
        //         return Rock;
        //     }else if(this.state.passable ===true){
        //         return Space;
        //     }
            
        // };
        return(
        <img src={type === 'player' ? pointing : type} style={{height: 30, width: 30, backgroundColor : 'black' }} alt={'tile'}/>
        )
    }
}
// let mapStateToProps = (state) =>(
//     { 
//         grid : state.grid,
//         myPosition: state.myPosition,
//         pointing : state.pointing,
    
//     }
// )

// let mapDispatchToProps = (dispatch) =>(
//     {
//        addColor: () => dispatch({type:'ADDCOLOR'}),
//        skipColor: () => dispatch({type: 'SKIPCOLOR'})
//     }
// )
export default Tile