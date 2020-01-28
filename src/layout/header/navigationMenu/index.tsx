import React from "react";
import {Link} from "react-router-dom";
import './component.css';
import Button from "react-bootstrap/Button";
import { State, Props } from "./types";

export default class NavigationMenu extends React.Component<Props, State> {
    // стейт, что бы фиксировать состояние меню
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
            windowWidth: window.innerWidth
        }
    }

    buttonOnClickHandler() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    // componentDidMount - хук реакта. В нем обработчик события, который реагирует на объект resize (изменение размера окна)
    // мы добавили в стейт windowWidth, чтобы отслеживать актуальную ширину окна - когда она меняется, компонент ререндерится
    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({
                windowWidth: window.innerWidth
            });
        });
    }

    render() {

        const isMobile: boolean = this.state.windowWidth < 960;

        return <div className="navigation">
            {isMobile ? <React.Fragment>
                <Button className="navigation__burger burger" variant="link" onClick={() => this.buttonOnClickHandler()}>Menu</Button>
                {/* && используется, так как если первый операнд false то дальше код не обрабатывается*/}
                {this.state.isOpen && (
                    <ul className="navigation__list burger__list">
                        <li className="navigation__item burger__item"><Link to="/">Uploader image</Link></li>
                        <li className="navigation__item burger__item"><Link to="/api">API</Link></li>
                    </ul>
                )}
            </React.Fragment> : (
                <ul className="navigation__list">
                    <li className="navigation__item"><Link to="/">Uploader image</Link></li>
                    <li className="navigation__item"><Link to="/api">API</Link></li>
                </ul>
            )}
        </div>
    }
}