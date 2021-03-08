import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Kakao from "./Pages/HTML/Kakao";
import YoutubeJS from "./Pages/JS/Youtube";
import Movies from "./Pages/REACT/Movies";
import Portfolio from "./Pages/REACT/Portfolio";
import Reheaven from "./Pages/REACT/Reheaven";
import YoutubeReact from "./Pages/REACT/Youtube";
import TwoLuck from "./Pages/RN/2LuckShare";

export default () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/project/kakaoClone" component={Kakao} />
                <Route path="/project/portfolio" component={Portfolio} />
                <Route path="/project/reheaven" component={Reheaven} />
                <Route path="/project/twoluck" component={TwoLuck} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};

// const HOME = "/";
// const ABOUT = "/about";

// const PROJECTS = "/projects";
// const PROJECT_DETAIL = "/:id";
