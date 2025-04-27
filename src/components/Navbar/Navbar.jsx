import React from 'react';
import s from './Navbar.module.css';
// import FriendsList from './../Friends/FriendsList/FriendsList';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {

  // let friendsList = props.state.friends.map(f => <FriendsList name={f.name} id={f.id} />)
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
