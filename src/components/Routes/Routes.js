import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "../Home/Home";
import Casos from "../Casos/Casos";
import Vacina from "../Vacina/Vacina";
import Pais from "../Pais/Pais";

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/casos" component={Casos} />
            <Route path="/vacina" component={Vacina} />
            <Route path="/pais" component={Pais} />
        </Switch>
    </BrowserRouter>

);

export default Rotas;