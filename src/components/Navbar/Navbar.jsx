import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <aside className={s.navbar}>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink to="/profile" className={({ isActive }) =>
              isActive ? s.active : undefined
            } >Моя страница</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Сообщения</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Пользователи</NavLink>
          </li>
          <li className={s.friends}>
            <NavLink to="/friends" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Друзья</NavLink>
            <div className={s.friendsWrapper}>
              {/* {friendsList} */}
            </div>
          </li>
          <li>
            <NavLink to="/photos" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Фотографии</NavLink>
          </li>
          <li>
            <NavLink to="settings" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Настройки</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
