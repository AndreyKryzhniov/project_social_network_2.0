import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
      <header className={s.header}>
        <img className={s.logo} src='http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'/>
      </header>
  );
}

export default Header;
