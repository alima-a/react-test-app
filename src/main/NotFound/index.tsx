import React from "react";
import { State, Props } from "./types";
import "./component.css";


export default class NotFound extends React.Component<Props, State> {

    render() {
        return <h2 className="not-found"> 404. Not found!</h2>
    }
}