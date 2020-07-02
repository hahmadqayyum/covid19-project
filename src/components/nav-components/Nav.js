import React from 'react'

import Analysis from './Analysis'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from '../NavBar';
function Nav() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/analysis" component={Analysis} />

            </Switch>
        </Router>
    )
}
export default Nav;