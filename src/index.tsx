import * as React from "react";
import {render} from "react-dom";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import "./styles.css";
import "./index.less";
import {Router, Route, Switch} from "react-router";
import DetteKanDuSokeOm from "./artikler/dette-kan-du-soke-om/DetteKanDuSokeOm";
import AndreMuligheter from "./artikler/andre-muligheter/AndreMuligheter";
import {history } from "./utils/navigasjon";
import Forside from "./artikler/forside/Forside";

function App() {

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Forside}/>
                <Route exact path="/dette-bor-du-vite" component={DetteBorDuVite}/>
                <Route exact path="/andre-mulighter" component={AndreMuligheter}/>
                <Route exact path="/dette-kan-du-soke-om" component={DetteKanDuSokeOm}/>
            </Switch>
            <br/>
            <br/>
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App/>, rootElement);
