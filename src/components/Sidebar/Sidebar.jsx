import React from 'react';
import s from './Sidebar.module.css';


const menuItems = [
  'Моя страница', 'Новости', 'Сообщения',
  'Друзья', 'Группы', 'Фотографии', 'Настройки'
];

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav>
        <ul className={s.nav}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#s">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
