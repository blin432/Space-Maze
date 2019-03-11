<<<<<<< HEAD
import { lv5 } from "../maps";
import up from '../up.png'
import down from '../down.png'
import left from '../left.png'
import right from '../right.png'

=======
let initState = {
>>>>>>> master

let initState = {
    // grid : lv5,
    // myPosition: null,
    // pointing : up,
    // movement:left,
    // pointTo:234
}

export const mainReducer = (state = initState, action) => {
    switch(action.type) {
        // case "37": 
        //     if(this.state.myPosition % 5 === 0){
        //         return 
        //     }else{
        //         let updatedGrid = [...this.state.grid]
        //         let endPosition = this.state.myPosition-1;
        //         this.setState({grid : updatedGrid, myPosition: endPosition, pointing: left})
        //     }
            
        // break;
        // case "38": 
        //     if(this.state.myPosition -5 < 0 ){
        //         return
        //     }else{
        //         let updatedGrid = [...this.state.grid]
        //         let endPosition = this.state.myPosition-5;
        //         this.setState({grid : updatedGrid, myPosition: endPosition, pointing: up})
        //     }
        // break;
        // case "39": 
        //     for(let i = this.state.myPosition; i >= 4; i-=5){
        //         if(i == 4 ){ 
        //             return
        //         }else {
        //             let updatedGrid = [...this.state.grid]
        //             let endPosition = this.state.myPosition+1;
        //             this.setState({grid : updatedGrid, myPosition: endPosition, pointing: right})
        //         }
        //     }
        // break;
        // case "40": 
        //     if(this.state.myPosition + 5 > this.state.grid.length){
        //         return
        //     }else{
        //         let updatedGrid = [...this.state.grid]
        //         let endPosition = this.state.myPosition+5;
        //         this.setState({grid : updatedGrid, myPosition: endPosition, pointing: down})
        //     }
        // break;
        default:
        return state;
    }
}
