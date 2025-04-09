import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="/img/logo.png"
          alt="логотип"
          width="90px" />
          <p>
            My social
          </p>
      </div>
    </header>
  );
};

export default Header;
