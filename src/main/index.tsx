import React from "react";
import {Route, Switch} from "react-router";
import ApiPage from "./ApiPage";
import ImagesPage from "./ImagesPage";
import './component.css';

export default class Main extends React.Component {
    render() {
        return <main className="wrapper">
            <div className="content">
                <Switch>
                    <Route path="/api">
                        <ApiPage />
                    </Route>
                    <Route path="/">
                        <ImagesPage />
                    </Route>
                </Switch>
            </div>
        </main>
    }
}