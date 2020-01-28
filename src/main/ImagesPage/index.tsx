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
            // "..." - создает новыей массив с содержанием images и url в начале
            images: [ url, ...this.state.images ]
        })
    }


    render() {
        return <React.Fragment>
            <ImgForm onSubmit={(s: string) =>  this.onSubmitHandler(s)} />
            <ImgList images={this.state.images} />
        </React.Fragment>
    }
}