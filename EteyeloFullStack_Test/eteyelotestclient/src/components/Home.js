import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-2 mt-5 p-5">Bienvenu sur Contoso</h1>
                
                <div className="bg-dark">
                    <p className="text-white p-5">
                        Bienvenu sur Contoso , la plateform qui vous aide et vous accompagne dans la realisation 
                        et la gestion des votre institution, c'est simple rapide et securiser vous n'avez qu'a creer
                        ou inscrire votre institution sur notre plateform et ajouter et inscrire vos eleves 
                        selon votre gres.
                    </p>
                   
                    <Link to="Commencer">
                         <Button variant="outline-primary" className="mb-4">Commencer</Button>
                    </Link>
                </div>
            </div>

        );
    }
}