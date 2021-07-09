import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    return (
        <nav>
            {/*
                Par defaut, les urls qui correspondent, auront la classe 'active'
                on peut redefinir la classe a ajouter avec 
                activeClassName="current"
            */}
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink to="/life-cycle">
                Cycle de vie
            </NavLink>
            <NavLink to="/params/avatar">
                Params
            </NavLink>
            <NavLink to="/back">
                Retour
            </NavLink>
            <NavLink to="/login">
                connexion
            </NavLink>
            <NavLink to="/admin">
                Admin
            </NavLink>
            <NavLink to="/hooks">
                Hooks
            </NavLink>
        </nav>
    );
}
export default Navigation;