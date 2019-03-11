import React, {Component} from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {navOpts} from '../navOpts.js'
import up from '../up.png'

class NavBar extends Component{
    render(){ 
        return(
            <Navbar bg="primary" expand="dark" expand="md">
            <Navbar.Brand href="/" >
            <img
                alt="rocket"
                src={up}
                width="60"
                height="60"
                className="d-inline-block align-top"
            />
      </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              {navOpts.map((option,i) => <NavLink key={i} className="m-3" to={option.route} style={{color:'white'}}>{option.name}</NavLink>)}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;