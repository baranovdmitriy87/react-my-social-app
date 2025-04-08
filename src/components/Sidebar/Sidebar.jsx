import React from 'react';
import s from './Sidebar.module.css';


const Sidebar = (props) => {
  return (
    <aside className={s.sidebar}>
      <nav>
        <ul className={s.nav}>

          <li>
            <a href="/profile">Моя страница</a>
          </li>
          <li>
            <a className={`${s.active}`} href="/dialogs">Сообщения</a>
          </li>
          <li>
            <a href="/friends">Друзья</a>
          </li>
          <li>
            <a href="/photos">Фотографии</a>
          </li>
          <li>
            <a href="settings">Настройки</a>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
