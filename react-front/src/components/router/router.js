import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TomaPresion from '../../views/tomaPresion/tomaPresion';
import PerfilUsuario from '../../views/perfilUsuario/perfilUsuario';
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
          </Switch>
        </Router>
    );
}
