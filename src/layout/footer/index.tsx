import React from "react";
import "./conponent.css";

export default class Footer extends React.Component {
    render() {
        return <footer className="page-footer">
            <p className="page-footer__text"> Автор проекта: <span>Алима Троицкая</span></p>
        </footer>
    }
}