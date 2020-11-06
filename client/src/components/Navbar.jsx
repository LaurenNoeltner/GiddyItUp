import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Navbar.Brand href="#">GiddyItUp</Navbar.Brand>
                        <div className="headBtn"><NavLink to="/Saloon"   activeClassName="selected">Saloon</NavLink></div>
                        <div className="headBtn"><NavLink to="/Bounty" activeClassName="selected">Bounty Board</NavLink></div> 
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Navbar;