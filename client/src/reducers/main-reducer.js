import up from '../images/up.png'
import {levels} from '../js/maps.js';
import space from '../images/space.jpg';
import Player from '../components/Player.jsx';

let initState = {
    grid : levels[4],
    level : levels[4],
    myPosition: null,
    pointing : up,
    show:false,
    username:'',
    time:123,
    modalShow : true
}

export const mainReducer = (state = initState, action) => {
    
    switch(action.type) {
        case "MOVE":
        let {movement, pointTo} = action
        let updatedGrid = [...state.grid]
        let endPosition = state.myPosition+movement;
        updatedGrid[endPosition] = updatedGrid[state.myPosition];
        updatedGrid[state.myPosition] = space

         return {
            grid : updatedGrid, 
            myPosition: endPosition, 
            pointing: pointTo

         }
        case "SAVE_TIME":
         return {

         }
        case "TELEPORT":

        let randomIndx = Math.floor(Math.random()*state.grid.length)

        while(state.grid[randomIndx] !== space ){
            randomIndx = Math.floor(Math.random()*state.grid.length)
        }
         return {
            myPosition : Math.floor(Math.random()*state.grid.length)
         }
        case "LEVEL_UP":

        let currentLevel = levels.indexOf(this.state.level)
        let nextLevel = levels[currentLevel-1]
        
         return {
                grid:nextLevel,
                level:nextLevel,
                myPosition: nextLevel.indexOf(Player)
         }

        case "BEAT_GAME":
         return {

         }
        default:
        return state;
    }
}
