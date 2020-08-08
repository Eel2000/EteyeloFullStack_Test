import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

export class Commencer extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true, promotion: [], etudData: new EtudiantData };

        var etudId = this.props.match.params["id"];
        var keyWord = this.props.match.params["keyword"]

        if (etudId > 0) {
            fetch('api/Home/DetailsStudent' + etudId + keyWord)
                .then(response => response.json())
                .then(data => {
                    this.setState({ loading: false, etudData: data });
                });
        }
        else {
            this.state = { loading: false, promotion: [], etudData: new EtudiantData };
        }

       
    }
    render() {
        return (
            <div className="container-fluide">
                <div className="container">
                    <h1 className="text-warning p-5 display-2"> Nouvelle Institu</h1>
                    <hr />
                    <div className="container col-6 card Shadow-lg mt-5 p-5 pb-5">
                        <h4 className="text-dark">Coordonnees</h4>
                        <hr />
                        <Form onSubmit={this.handleSave}>
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

    handleSave(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        fetch('api/Home/NewInstituStudent', {
            method: 'POST',
            body: data
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("");
            })
    }

     handleCancel(e) {
        e.preventDefault();
        this.props.history.push("");
    }  
}

export class EtudiantData {
    id = "";
    FirstName = "";
    LastName = "";
    promo = "";
}