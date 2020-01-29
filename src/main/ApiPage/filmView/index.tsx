import React from "react";
import Table from "react-bootstrap/Table";
import { Props } from "./types";
import "./component.css";

export default class FilmView extends React.Component<Props, {}> {
    render() {
        const {
            title,
            episode_id,
            director,
            producer,
            release_date,
            opening_crawl
        } = this.props.film

        return <Table className="table" striped bordered hover>
            <tbody>
            <tr>
                <td>Title:</td>
                <td>{ title }</td>
            </tr>
            <tr>
                <td>Director:</td>
                <td>{ director }</td>
            </tr>
            <tr>
                <td>Producer:</td>
                <td>{ producer }</td>
            </tr>
            <tr>
                <td>Release date:</td>
                <td>{ release_date }</td>
            </tr>
            <tr>
                <td>Opening crawl:</td>
                <td>{ opening_crawl }</td>
            </tr>
            <tr>
            <td>Chronological ID:</td>
            <td>{ episode_id }</td>
            </tr>
            </tbody>
        </Table>
    }
}