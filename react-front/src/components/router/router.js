import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TomaPresion from '../../views/tomaPresion/tomaPresion';
import Home from '../home/home'

export default function AppRouter() {
    return(
        <Router>
          <Switch>
            <Route exact path={["/", "/Home"]} component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/tomaPresion" exact component={TomaPresion} />
          </Switch>
        </Router>
    );
}
