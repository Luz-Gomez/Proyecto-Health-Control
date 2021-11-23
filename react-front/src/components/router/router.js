import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TomaPresion from '../../views/tomaPresion/tomaPresion';
import PerfilUsuario from '../../views/perfilUsuario/perfilUsuario';
import ConsultaPresion from '../../views/consultaPresion/consultaPresion';
import PerfilMedico from '../../views/perfilMedico/perfilMedico';

import Tips from '../../views/tips/tips';
import Consejos from '../../views/consejos/consejos';

import About from '../about/about';
import Home from '../home/home';
import Login from '../login/login';

export default function AppRouter() {
    return(
        <Router>
          <Switch>
            <Route exact path={["/", "/Home"]} component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/about" exact component={About} />
            <Route path="/tomaPresion" exact component={TomaPresion} />
            <Route path="/perfilUsuario" exact component={PerfilUsuario} />
            <Route path="/consultaPresion" exact component={ConsultaPresion} />
            <Route path="/perfilMedico" exact component={PerfilMedico} />
            <Route path="/tips" exact component={Tips} />
            <Route path="/consejos" exact component={Consejos} />
          </Switch>
        </Router>
    );
}
