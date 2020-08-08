import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


export class InstitutionList extends Component {

    constructor(props) {
        super(props);
        this.state = { institu: [], loading: true };
    }

    RefrechList() {
        fetch('api/Home/GetInstitus')
            .then(response => response.json())
            .then(data => {
                this.setState({ institu: data, loading: false });
            });
    }

    componentDidMount() {
        this.RefrechList();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.institu;  
            
        const { institu } = this.state;

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
                                        <th>Institution/ecole</th>
                                        <th>Telephone</th>
                                        <th>----</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institu.map(institu =>
                                        <tr key={institu.id}>
                                            <td></td>
                                            <td>{institu.InstituName}</td>
                                            <td>{institu.InstituPhone}</td>
                                            <td>
                                                <Link to="/Details">Details</Link>
                                            </td>
                                        </tr>
                                        )}
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

