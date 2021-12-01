import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import PrivateRoute from '../Auth/PrivateRoute';
import TomaPresion from '../../views/tomaPresion/tomaPresion';
import PerfilUsuario from '../../views/perfilUsuario/perfilUsuario';
import ConsultaTomaPresion from '../../views/consultaTomaPresion/consultaTomaPresion';

import Medicos from '../../views/medico/medico';
import Consejos from '../../views/consejos/consejos';
import Tips from '../../views/tips/tips'
import About from '../about/about';
import Home from '../home/home'
import Login from '../login/login';
import Registro from '../registro/registro';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/Home"]} component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/registro" exact component={Registro} />

        {/*            <PrivateRoute exact path={[ "/tomaPresion" ]} component={TomaPresion} /> */}

        <Route path="/tomaPresion" exact component={TomaPresion} />
        <Route path="/perfilUsuario" exact component={PerfilUsuario} />
        <Route path="/consultaTomaPresion" exact component={ConsultaTomaPresion} />
        <Route path="/medicos" exact component={Medicos} />
        <Route path="/consejos" exact component={Consejos} />
        <Route path="/tips" exact component={Tips} />

        {/* Ruta de página no encontrada (404) */}
        <Route path={"*"} component={() => (
          <h1 style={{ marginTop: 300 }}>
            404
            <br />
            Página no encontrada
          </h1>
        )} />
      </Switch>
    </Router>
  );
}
