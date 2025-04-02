import React from "react"
import s from './NavMenu.module.css'

const NavMenu = () => {
  const menuItems = [
    'Моя страница', 'Новости', 'Сообщения',
    'Друзья', 'Группы', 'Фотографии', 'Настройки'
  ];

  return (
    <nav>
      <ul className={s.nav}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#s">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default NavMenu;

