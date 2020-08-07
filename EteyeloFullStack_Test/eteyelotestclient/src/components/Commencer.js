import React, { Component } from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

export class Commencer extends Component {
    render() {
        return (
            <div className="container-fluide">
                <div className="container">
                    <h1 className="text-warning p-5 display-2"> Nouvelle Institu</h1>
                    <hr />
                    <div className="container col-6 card Shadow-lg mt-5 p-5 pb-5">
                        <h4 className="text-dark">Coordonnees</h4>
                        <hr />
                        <Form>
                            <Form.Group controlId="InstituName">
                                <Form.Label>Nom de l'institu</Form.Label>
                                <Form.Control type="email" placeholder="Nom de l'institu" />
                            </Form.Group>

                           

                            <Form.Group controlId="InsitutPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="Telephone" />
                            </Form.Group>

                            <Form.Group controlId="InstituPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>

                            <NavLink className="nav-link" to="/InstitutionList">J'ai deja une institu</NavLink>

                            <Row>
                                <Col>
                                    <Button variant="success" className="col-3" type="submit">
                                        Submit
                                </Button>
                                </Col>
                            </Row>

                        </Form>
                    </div>
                    <hr />
                    <div className="container mt-5 mb-5 p-5">
                        <p className="jumbotron"> pour creer une nouvelle institution a gerer, veuillez s'il vous plait entrer les informations
                    exact et veillez a mettre un mot de passe difficile mais que vous retiendrais vous.</p>
                    </div>
                </div>
            </div>
            );
    }
}