import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://avatars.mds.yandex.net/i?id=3faed50e248a4673e0968d661bede470d7f74f41-5875527-images-thumbs&n=13"
          alt="логотип"
          width="400px" />
      </div>
    </header>
  );
};

export default Header;
