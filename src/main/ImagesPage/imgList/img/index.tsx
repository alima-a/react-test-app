import React from "react";
import "./component.css";
import { State, Props } from "./type";

export default class Img extends React.Component<Props, State> {
    render() {
        return <div className="img_wrap">
            <img className="img_wrap__width" src={this.props.url} />
        </div>
    }
}
