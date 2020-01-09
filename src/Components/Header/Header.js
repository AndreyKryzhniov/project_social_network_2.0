import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {

    const logout = () => {
        props.logoutThunkAC()
    }

  return (
      <header className={s.header}>
        <img className={s.logo} src='http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'/>
        <div className={s.loginBlock}>
            {props.auth ?
                <div>{props.login} - <button onClick={logout}>Log out</button>
                </div> : <NavLink to='/login'>Login</NavLink>}
        </div>
      </header>
  );
}

export default Header;
