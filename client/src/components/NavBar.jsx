import React, {Component} from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {navOpts} from '../navOpts.js';
import axios from 'axios';


class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
          hidden:this.props.hidden
        }
      }
    render(){ 
        
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="mr-5" ><NavLink to="/" style={{color:'white',textDecoration: 'none'}}>The Reactor</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/showSignUp">Sign In</Nav.Link>
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link hidden={this.state.hidden} href="/Logout">Logout</Nav.Link>
                {/* {navOpts.map((option,i) => <NavLink key={i} className="m-3" to={option.route} style={{color:'black'}}>{option.name}</NavLink>)} */}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
                        
        )
    }
}

export default NavBar;