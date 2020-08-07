import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { Home } from './components/Home';
import { Commencer } from './components/Commencer';
import { NewHomePage } from './components/NewHomePage';
import { InstitutionList } from './components/InstitutionList';
import { AjouterEleve } from './components/AjouterEleve';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Commencer" component={Commencer} />
                    <Route path="/NewHomePage" component={NewHomePage} />
                    <Route path="/InstitutionList" component={InstitutionList} />
                    <Route path="/AjouterEleve" component={AjouterEleve} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
