import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from "./navigationMenu";
import "./conponent.css";

const Header: React.FC = () => {
    return (
        <header className="page-header">
            <Link className="page-header__logo" to="/">TEST REACT APP</Link>
            <NavigationMenu />
        </header>
    );
}

export default Header;
