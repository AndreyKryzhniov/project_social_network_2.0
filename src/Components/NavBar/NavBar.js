import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = (props) => {
    let state = props.store.getState().navBarPage
    let navBarElements = state.sidebar.map(n =>
        <div className={s.item} key={n.key}>
            <NavLink to={n.url} activeClassName={s.active}>
                {n.name}
            </NavLink>
        </div>)
    return (
    <div className={s.nav}>
        {navBarElements}
    </div>
    )
}



export default NavBar;
