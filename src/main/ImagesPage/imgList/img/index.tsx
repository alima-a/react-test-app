import React from "react";
import "./component.css";
import Image from "react-bootstrap/Image";

export default class Img extends React.Component {
    render() {
        return <Image src="holder.js/171x180" thumbnail />
    }
}