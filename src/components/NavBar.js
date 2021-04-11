import React from 'react'

import {Navbar} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark"  >
                <Navbar.Brand style={{ color:"white" }}><b>EASY INSURANCE</b></Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBar;