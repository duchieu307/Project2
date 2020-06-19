import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg='dark' expand='lg'>
                    <Navbar.Brand><Link to="/">MP3 Online</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/chart">Chart</Link></Nav.Link>
                            <Nav.Link><Link to="/">Artist</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline className="form-search">
                        <FormControl type="text" placeholder="Search song,album..." className="sr-sm-2 " id="input-search" />
                    </Form>
                </Navbar>
            </div>
        );
    }
}


export default withRouter(Header);