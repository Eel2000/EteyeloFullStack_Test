import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                 Contoso
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="d-inline p-2 bg-white text-black" to="/">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-white text-black" to="/Commencer">Nouveau</NavLink>
                        <NavLink className="d-inline p-2 bg-white text-black" to="/InstitutionList">Institutions</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Trouver" className="mr-sm-2" />
                        <Button variant="outline-success">Trouver</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        
            );
    }
}