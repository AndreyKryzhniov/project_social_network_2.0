import React from 'react';
import h from './Header.module.css';

function Header() {
  return (
      <header className={h.header}>
        <img src='http://www.marketer.ru/wp-content/uploads/2011/10/wwf-logo-design.jpg'/>
      </header>
  );
}

export default Header;
