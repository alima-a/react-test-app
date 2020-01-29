import React from "react";
import ApiForm from "./apiForm";
import FilmView from "./filmView";
import { getFilm } from "../../api/index";
import { State, Props } from "./types";
import Spinner from "react-bootstrap/Spinner";
import "./component.css";


export default class ApiPage extends React.Component<Props, State> {

    constructor(props: Props) {
         super(props);
        this.state = {
            film: null,
            isError: false,
            isLoading: false
        }
    }

    async onSubmitHandler(param: string) {
        try {
            this.setState({
                isLoading: true,
                isError: false
            })

            const film = await getFilm(param)

            this.setState({
                film,
                isLoading: false
            })
        } catch (e) {
            this.setState({
                isError: true,
                isLoading: false
            })
        }
    }

    render() {
        return <React.Fragment>
            <h2>API</h2>
            <ApiForm onSubmit={(s: string) =>  this.onSubmitHandler(s) } />
            {this.state.film &&
                <FilmView film={this.state.film} />
            }
            {this.state.isLoading &&
            <div className="spinner">
                <Spinner animation="border" variant="primary" />
            </div>
            }
            {this.state.isError &&
               <h2 className="error">Oops! Try again.</h2>
            }

        </React.Fragment>
    }
}