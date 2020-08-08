import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

export class NewHomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="container">
                    <h1 className="display-2 text-warning p-5">Nom de l'institution</h1>


                    <InputGroup className="mb-1">
                        <FormControl
                            placeholder="Eleve rechercher"
                            aria-label="prenom de l'eleve"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append className="col-8 ">
                            <Button variant="success" type="submit">
                                Recherche
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <h4 className="mt-5">Liste de eleves disponible</h4>
                    <div className="container">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Prenom</th>
                                    <th>Nom Complet</th>
                                    <th>Promotion</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>
                    </div>

                    <NavLink className="nav-link text-left" to="/AjouterEleve">Nouvel eleve</NavLink>
                </div>
            </React.Fragment>
            );
    }
}