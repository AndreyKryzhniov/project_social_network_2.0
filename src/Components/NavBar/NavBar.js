import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = (props) => {
    let state = props.store.getState().navBarPage
    let navBarElements = state.sidebar.map(n =>
        <div className={s.item} key={n.id}>
            <NavLink to={n.url} key={n.id} activeClassName={s.active}>
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
