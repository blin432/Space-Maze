import React, { Component } from 'react';
import './App.css';
import Field from './components/Field.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import {Navbar} from 'react-bootstrap';


class App extends Component {
  constructor(){
    super()
    this.state = { };
  }

  render() {
    return (
      <div style={{height:'100vh', width:'100%'}}>
           <NavBar/>
                   <Switch>
                       <Route exact path ="/" component={Home}/>
                       <Route exact path ="/showSignUp" component={SignUp}/>
                       <Route exact path ="/showLogIn" component={Login}/>
                       <Route exact path="/play" component={Field}/>
                   </Switch>
          {/* <Navbar sticky="bottom" className="justify-content-center" bg="primary" style={{color:'white'}}>A Digital Crafts Production</Navbar> */}
      </div>
    );
  }
}

export default App;

// class App extends React.Component {
//   constructor(...args) {
//     super(...args);

//     this.state = { modalShow: false };
//   }

//   render() {
//     let modalClose = () => this.setState({ modalShow: false });

//     return (
//       <ButtonToolbar>
//         <Button
//           variant="primary"
//           onClick={() => this.setState({ modalShow: true })}
//         >
//           Launch modal with grid
//         </Button>

//         <MydModalWithGrid show={this.state.modalShow} onHide={modalClose} />
//       </ButtonToolbar>
//     );
//   }
// }

// render(<App />);