import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Home from "./Pages/Home";

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};
