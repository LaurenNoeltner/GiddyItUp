import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Navbar.Brand href="#">GiddyItUp</Navbar.Brand>
                        <div className="headBtn"><NavLink to="/Saloon"  activeClassName="selected">Saloon</NavLink></div>
                        <div className="headBtn"><NavLink to="/Bounty" activeClassName="selected">Bounty Board</NavLink></div> 
                        <div className="headBtn"><NavLink to="/ParentBounty" activeClassName="selected">Sherrif's Bounty Board</NavLink></div> 
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Header;