import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';
import logo from '../../../assets/img/logo_movies.svg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => (
    <AppBar position="sticky" color="default" elevation={0} className="header">
        <Toolbar className="navbar__header">
            <NavLink to="/" className="logo__header">
                <img src={logo} alt="logo movies" />
            </NavLink>
            <nav>
                <NavLink className="nav__link" to="/search">
                    Search
                </NavLink>
            </nav>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';
export default Header;
