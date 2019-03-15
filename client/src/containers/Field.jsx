import { connect } from 'react-redux';
import Field from '../components/Field.jsx'

let mapStateToProps = ( state ) => (
    {
        grid : state.grid,
        level : state.level,
        myPosition: state.myPosition,
        pointing : state.pointing,
        show: state.show,
        username: state.username,
        time: state.time,
        modalShow : state.modalShow
    }
)

let mapDispatchToProps = (dispatch) => (
    {
        move: () => dispatch({type:"MOVE"}),
        saveTime: () => dispatch({type:"SAVE_TIME"}),
        teleport: () => dispatch({type: "TELEPORT"}),
        levelUp: () => dispatch({type: "LEVEL_UP"}),
        beatGame: () => dispatch({type: "BEAT_GAME"})

    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Field)