import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {


    let navBarElements = props.state.sidebar.map(n => <div className={s.item}><NavLink to={n.url} activeClassName={s.active}>{n.name}</NavLink></div>)

    return (
        <div className={s.nav}>
            {navBarElements}
            <div className={s.itemFriends}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
            </div>
        </div>
    );
}

export default NavBar;
