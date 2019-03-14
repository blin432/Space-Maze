import React,{Component} from 'react';
import {Navbar, Nav, Container, Row, Col,} from 'react-bootstrap';
import player from './Player.jsx';
import Player from './Player.jsx';
import '../App.css';
import finish from '../finishline.gif';
import up from '../up.png'
// import rock from '../Boundary.png'
import down from '../down.png'
import left from '../left.png'
import right from '../right.png'
import  {levels} from '../maps.js';
import Tile from '../components/Tile.jsx';
import GameTimer from '../components/Timer.jsx';
import rock from '../Boundary.png';
import space from '../space.jpg';
import axios from 'axios';
import Highscores from './Highscores.jsx';
import MobileButton from './MobileButton.jsx';
import './MobileButton.css'
import PropTypes from 'prop-types';
import RulesModal from './RulesModal.jsx';
import {items} from '../items.js';



class Field extends Component {
    constructor(props){
        super(props)
        this.state = {
            grid : levels[4],
            level : levels[4],
            myPosition: null,
            pointing : up,
            show:false,
            username:'',
            time:123,
            modalShow : true
        }
    }

              
    componentDidMount(){
        console.log('component mounted');
        document.addEventListener("keydown", (e) => this.move(e));
        this.setState({myPosition : this.state.grid.indexOf(player)})

        // axios.get('/users/status').then((response) =>{
        //     console.log(response)
        //     let status= response.data.isLoggedIn;
        //     if (!status){
        //         this.props.history.push('/');
        //     }else {
                
        //      this.setState({username:response.data.username})
        //      document.addEventListener("keydown", (e) => this.move(e));
        //     //  this.spawnShip();
        //     }
        // }).catch((error) => {
                
        //       console.log(error)
        //     });
    }
    
    
    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => this.move(e));
    }


    postHighScore(){
        let username = this.state.username;
        let points = this.state.time;
        axios.post('/scores/record',{username:username,
            points:points
        }).then((response) =>{
            console.log(response)
        }).catch((error) => {
              console.log(error)
            });
    }
    // spawnShip(){
    //     let newGrid = [...this.state.grid]
    //     let randomIndex = Math.floor(Math.random()*newGrid.length);
    //     newGrid[randomIndex] = 2;
    //     newGrid[0]=3;
    //     this.setState({grid : newGrid, myPosition: randomIndex})
    // }
   
   
    handleClose(e) {
        console.log(e);
        // this.setState({ show: false, grid: lv4 });
        
        // let newGrid = [...this.state.grid]
        // let randomIndex = Math.floor(Math.random()*newGrid.length);
        // newGrid[randomIndex] = 2;
        // newGrid[0]=3;
        // this.setState({grid : newGrid, myPosition: randomIndex})
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    calculateNewPosition(movement,pointTo){
        console.log(this.state.grid);
        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;
        console.log(`endPosition: ${endPosition}`)
        console.log(`updatedGrid[endPosition]: ${updatedGrid[endPosition]}`)

        switch(updatedGrid[endPosition]){
            case rock :
            return
            case space :
            updatedGrid[endPosition] = updatedGrid[this.state.myPosition];
            updatedGrid[this.state.myPosition] = space
            this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
            return
            case finish :
            console.log('reached finish')
            let currentLevel = levels.indexOf(this.state.level)
            console.log(`current level : ${currentLevel}`)
            let nextLevel = levels[currentLevel-1]
            console.log(nextLevel)
            this.setState({grid : nextLevel, level : nextLevel, myPosition : nextLevel.indexOf(player)});
            return
            default:
            return
        }
        if(updatedGrid[endPosition] === rock){
            return 
        }
        // else if (updatedGrid[endPosition] === 0 || updatedGrid[endPosition] ===3 ){
        //     if(updatedGrid[endPosition] ===3){
        //         console.log("finished")
        //         this.setState({ show: true });
        //     }
        updatedGrid[endPosition] = updatedGrid[this.state.myPosition];
        updatedGrid[this.state.myPosition] = space
        this.setState({grid : updatedGrid, myPosition: endPosition, pointing: pointTo})
    }
    
    move({keyCode}){
        console.log({keyCode});
          
        switch( keyCode ) {

            case 37:
                console.log(this.state.myPosition)
                if(this.state.myPosition % 5 === 0){
                    return
                }
                this.calculateNewPosition(-1,left);
                console.log(keyCode);
                break;
            case 38:
            console.log(this.state.myPosition)
            console.log('up triggered')
                if(this.state.myPosition -5 < 0 ){
                    console.log('up stopped')
                    return
                }
                this.calculateNewPosition(-5,up)
                break;
            case 39:
            console.log(this.state.myPosition)
                for(let i = this.state.myPosition; i >= 4; i-=5){
                    if(i === 4 ){ 
                        return
                    }
                }
                this.calculateNewPosition(+1,right)
                break;
            case 40:
            console.log(this.state.myPosition)
                if(this.state.myPosition + 5 > this.state.grid.length){
                    return
                }
                this.calculateNewPosition(+5,down)
                break;
                default: 
                break;
        }
    }

    
    render(){

        const handleHide = () => this.setState({ show: false });

        const handleShow = () => this.setState({ show: true });
        
        let modalClose = () => this.setState({ modalShow: false });

        let field = this.state.grid.map((tile,i) => 
    <Col key={i} style={{margin : '5px'}}>{tile === player ? <Player pointing={this.state.pointing}/> : <Tile type={tile}/>}</Col>)


        
        return(
                <Container>
                <GameTimer/>
                <Row style={{margin : 0, padding: 0}}>
                <Col className="justify-content-center mt-3" sm={12} md={{size:3}} style={{ margin : 0, padding: 0}}>
                <div className="d-none d-md-block" >
                    <h3 className="text-center">Tips</h3>
                    </div>
                    <Navbar expand="md">
                    <div className="d-md-none d-block">
                    <h3 className="text-center">Tips</h3>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Row className="text-center">
                                {items.map((item,i) => 
                                <div key={i} className="m-2">
                                    <img src={item.img} alt="item" height={60} width={60}/>
                                    <p>{item.description}</p>
                                </div>)}
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    
                    <div className="d-md-none">
                    <Highscores />
                    </div>
                    </Col>

                    <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
                        <Row>{field}</Row >
                    </Container>
                  
                  <Col sm={12} md={3}>
                        <div className="d-none d-md-block" >
                            <Highscores />
                        </div>
                    </Col>
                </Row>
                <div className="d-md-none" style={{marginTop : '-800px'}}>
                <MobileButton move={this.move.bind(this)}/>
                </div>
                </Container>
        )

    }
}

export default Field;


//             <Container style={{maxWidth: 400, backgroundColor : 'black'}}>
//                 <Alert show={this.state.show} onClose={handleHide} variant="success">
//                     <Alert.Heading>How's it going?!</Alert.Heading>
//                     <p>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
//                         eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
//                         amet fermentum.
//                     </p>
//                     <hr />
//                     <div className="d-flex justify-content-end">
//                         <Button onClick={(e)=>this.handleClose(e)} variant="outline-success">
//                         Close me ya'll!
//                         </Button>
//                     </div>
//                 </Alert>
//                 <Row>{field}</Row >
                
//             </Container>

//            {/* component for mobile arrow functions passed the "move" function down to MobileButton */}
//             <MobileButton move = {this.move.bind(this)}/>
          
//             </div>
//            )
    
            
        



