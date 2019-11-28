import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
  return (
      <header className={s.header}>
        <img className={s.logo} src='http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'/>
        <div className={s.loginBlock}>
            {props.auth ? props.login : <NavLink to='/login'>Login</NavLink>}
        </div>
      </header>
  );
}

export default Header;
