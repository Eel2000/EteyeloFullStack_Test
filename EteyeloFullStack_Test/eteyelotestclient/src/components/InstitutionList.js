import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export class InstitutionList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
               
                <div className="container">
                    <div className="container">
                        <h1 className="display-3 text-warning p-5">Institutions/etablissement/Ecoles disponible</h1>


                        <InputGroup className="mb-1">
                            <FormControl
                                placeholder="Eleve rechercher"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append className="col-8 ">
                                <Button variant="success" type="submit">
                                    Recherche
                        </Button>
                            </InputGroup.Append>
                        </InputGroup>

                        
                        <div className="container">
                            <Table striped bordered hover variant="secondary">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Intitution/ecole</th>
                                        <th>Email</th>
                                        <th>Telephone</th>
                                        <th>----</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table>
                        </div>

                        <NavLink className="nav-link text-left" to="/Commencer">Nouveau</NavLink>
                    </div>
                </div>
            </React.Fragment>
            );
    }
}