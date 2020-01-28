import React from 'react';
import Header from './header';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Main from "../main";
import Footer from "./footer";
import "./component.css";

export default class Layout extends React.Component {
    render() {
        return <div className="layout">
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        </div>
    }
}

