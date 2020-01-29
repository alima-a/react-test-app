import React from "react";
import {Route, Switch} from "react-router";
import ApiPage from "./ApiPage";
import ImagesPage from "./ImagesPage";
import './component.css';
import NotFound from "./NotFound";

export default class Main extends React.Component {
    render() {
        return <main className="wrapper">
            <div className="content">
                <Switch>
                    <Route exact path="/api">
                        <ApiPage />
                    </Route>
                    <Route exact path="/">
                        <ImagesPage />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </main>
    }
}