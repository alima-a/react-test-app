import React from "react";
import ImgForm from "./imgForm";
import ImgList from "./imgList";
import { State, Props } from "./types";

export default class ImagesPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            images: []
        }
    }

    onSubmitHandler(url: string) {
        this.setState({
            images: [ url, ...this.state.images ]
        })
    }


    render() {
        return <React.Fragment>
            <h2>Uploader images</h2>
            <ImgForm onSubmit={(s: string) =>  this.onSubmitHandler(s)} />
            <ImgList images={this.state.images} />
        </React.Fragment>
    }
}