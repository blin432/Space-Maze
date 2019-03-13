import React,{Component} from 'react';
import {Navbar, Nav, Container, Row, Col,} from 'react-bootstrap';
import Player from './Player.jsx';
import '../App.css';
import up from '../up.png'
import down from '../down.png'
import left from '../left.png'
import right from '../right.png'
import  {lv1} from '../maps.js';
import Tile from '../components/Tile.jsx';
import GameTimer from '../components/Timer.jsx';
// import Rock from '../Boundary.png';
// import Space from '../space.jpg';
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
            grid : lv1,
            myPosition: null,
            pointing : up,
            show:false,
            username:'',
            time:123,
            modalShow : true
        }
    }

              
    componentDidMount(){
        console.log(this.props.match);
        axios.get('/users/status').then((response) =>{
            console.log(response)
            let status= response.data.isLoggedIn;
            if (!status){
                this.props.history.push('/');
            }else {
                
             this.setState({username:response.data.username})
             document.addEventListener("keydown", (e) => this.move(e));
             this.spawnShip();
            }
        }).catch((error) => {
                
              console.log(error)
            });
    }
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
    spawnShip(){
        let newGrid = [...this.state.grid]
        let randomIndex = Math.floor(Math.random()*newGrid.length);
        newGrid[randomIndex] = 2;
        newGrid[0]=3;
        this.setState({grid : newGrid, myPosition: randomIndex})
    }
   
   
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
        let updatedGrid = [...this.state.grid]
        let endPosition = this.state.myPosition+movement;
        if(updatedGrid[endPosition] === 1){
            return 
        } else if (updatedGrid[endPosition] === 0 || updatedGrid[endPosition] ===3 ){
            if(updatedGrid[endPosition] ===3){
                console.log("finished")
                this.setState({ show: true });
            }
        updatedGrid[endPosition] = updatedGrid[this.state.myPosition];
        updatedGrid[this.state.myPosition] = 0;}

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
                if(this.state.myPosition -5 < 0 ){
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
        <Col key={i} style={{margin : '5px'}}>
        {tile === 0 || tile === 1 || tile===3 ? <Tile  finish={i===0 ? false : true} passable={tile===1 ? false : true}/> : <Player pointing={this.state.pointing}/>}
        </Col>)

        
        return(


                <div className="container-fluid" style={{margin : 0, padding: 0, maxHeight : '700px'}}>
                <Row className="justify-content-center" style={{height: 80, width : '100%', backgroundColor : '#DCDCDC', margin : 0, padding: 0}}>
                <GameTimer/>
                </Row>
                <Container>
                <Row style={{margin : 0, padding: 0}}>
                <Col className="justify-content-center mt-3" sm={12} md={{size:3}} style={{ margin : 0, padding: 0}}>
                <div className="d-none d-md-block">
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

                    <Col sm={12} md={{size:6}} style={{backgroundColor:'black', overflow : 'auto', maxHeight : '960px',maxWidth:400}}>
                        {field}
                    </Col>
                  
                                      <Col sm={12} md={3}>
                        <div className="d-none d-md-block">
                            <Highscores />
                        </div>
                    </Col>
                </Row>
                <MobileButton move = {this.move.bind(this)}/>
                </Container>
                </div>
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
    
            
        



