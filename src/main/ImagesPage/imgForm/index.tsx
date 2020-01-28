import React, {FormEvent} from "react";
import "./component.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { State, Props } from "./types";

export default class ImgForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            url: ''
        }
    }

    urlChangeHandler(event: FormEvent<HTMLInputElement>){
        this.setState({url: event.currentTarget.value})
    }

    submitHandler(e: FormEvent<HTMLButtonElement>){
        e.preventDefault();
        this.props.onSubmit(this.state.url);
    }

    render() {
        return <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Вставьте ссылку на изображение:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="url"
                    value={this.state.url}
                    onChange={(event: FormEvent<HTMLInputElement>) => this.urlChangeHandler(event)}
                />
            </Form.Group>
            <Button variant="primary"
                    type="submit"
                    onClick={(e: FormEvent<HTMLButtonElement>) => this.submitHandler(e)}
            >
                Submit
            </Button>
        </Form>
    }
}