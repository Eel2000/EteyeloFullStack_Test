import React, { Component } from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export class AjouterEleve extends Component {
    render() {
        return (
            <div className="container-fluide">
                <div className="container">
                    <h1 className="text-warning p-5 display-2"> Nouvel Eleve</h1>
                    <hr />
                    <div className="container col-6 card Shadow-lg mt-5 p-5 pb-5">
                        <h4 className="text-dark">Coordonnees</h4>
                        <hr />
                        <Form>
                            <Form.Group controlId="InstituName">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Prenom" />
                            </Form.Group>

                            <Form.Group controlId="InstituName">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Nom & Post-Nom" />
                            </Form.Group>

                            <Form.Group controlId="InstituEmail">
                                <Form.Label>Email de l'institu</Form.Label>
                                <Form.Control type="email" placeholder="addresse email de l'eleve" />
                                <Form.Text className="text-muted">
                                    Nous ne partegerons jamais votre adresse Email a personne.
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="InsitutPhone">
                                <Form.Label></Form.Label>
                                <Form.Control type="tel" placeholder="Telephone" />
                            </Form.Group>

                            <Form.Group controlId="InstituPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Promotion" />
                            </Form.Group>

                            <NavLink className="nav-link" to="/NewHomePage">Deja Inscrit?</NavLink>

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