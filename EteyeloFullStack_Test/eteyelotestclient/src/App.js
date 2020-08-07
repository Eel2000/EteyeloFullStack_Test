import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { Home } from './components/Home';
import { Commencer } from './components/Commencer';
import { NewHomePage } from './components/NewHomePage';



function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Commencer" component={Commencer} />
                    <Route path="/NewHomePage" component={NewHomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
