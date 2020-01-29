import React from "react";
import "./component.css";
import Img from "./img";
import { State, Props } from "./types";

export default class ImgList extends React.Component<Props, State> {
    render() {
        return <div className="img-list">
            { this.props.images.map((url: string) => <Img url={url}/> ) }
        </div>
    }
}