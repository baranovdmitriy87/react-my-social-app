import React from 'react';
import NavMenu from './NavMenu';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <NavMenu />
    </aside>
  );
};

export default Sidebar;
