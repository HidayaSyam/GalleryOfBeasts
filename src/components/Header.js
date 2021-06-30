import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            alt=""
                            className="d-inline-block align-top"
                        />
                        React Bootstrap
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}

export default Header;
