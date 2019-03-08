import React, {Component} from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {navOpts} from '../navOpts.js'


class NavBar extends Component{

    render(){ 

        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="mr-5" ><NavLink to="/" style={{color:'white',textDecoration: 'none'}}>The Reactor</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {navOpts.map((option,i) => <NavLink key={i} className="m-3" to={option.route} style={{color:'black'}}>{option.name}</NavLink>)}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
                        
        )
    }
}

export default NavBar;