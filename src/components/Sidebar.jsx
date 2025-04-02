import React from 'react';
import '../App.css';

const Sidebar = () => {
  const menuItems = [
    'Моя страница', 'Новости', 'Сообщения',
    'Друзья', 'Группы', 'Фотографии', 'Настройки'
  ];

  return (
    <aside className="sidebar">
      <nav>
      <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
