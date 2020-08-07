import React, { Component } from 'react';
import { Navigation } from './Navigation';


export class InstitutionList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="container-fluid">
                    <h1>list des institutions</h1>
                </div>
            </React.Fragment>
            );
    }
}