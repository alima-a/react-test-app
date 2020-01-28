import React, {FormEvent} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { State, Props } from "./types";
import "./component.css";

export default class ApiForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            key: ''
        }
    }
    //input реагирует на каждое изменение и вносит его в state
    keyChangeHandler(event: FormEvent<HTMLInputElement>){
        this.setState({key: event.currentTarget.value})
        console.log('change', event.currentTarget.value)
    }

    submitHandler(e: FormEvent<HTMLButtonElement>){
        e.preventDefault();
        this.props.onSubmit(this.state.key);
    }

    render() {
        return <Form className="form-film">
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-film__button">Звездные войны:</Form.Label>
                <Form.Control type="text"
                    placeholder="Ведите номер фильма"
                    value={this.state.key}
                    onChange={(event: FormEvent<HTMLInputElement>) => this.keyChangeHandler(event)}/>
            </Form.Group>
            <div className="form-film__wrap">
                <Button className="form-film__btn"
                        variant="primary"
                        type="submit"
                        onClick={(e: FormEvent<HTMLButtonElement>) => this.submitHandler(e)}>
                    Submit
                </Button>
            </div>
        </Form>
    }
}