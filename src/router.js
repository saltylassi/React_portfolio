import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/React/Portfolio";
import Reheaven from "./Pages/React/Reheaven";
import TwoLuck from "./Pages/RN/2LuckShare";

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/project/portfolio" component={Portfolio} />
                <Route path="/project/reheaven" component={Reheaven} />
                <Route path="/project/twoluck" component={TwoLuck} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};
