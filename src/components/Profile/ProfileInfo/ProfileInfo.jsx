import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {

  const contacts = [
    { icon: '📱', text: '+7 (906) 735-11-37' },
    { icon: '✉️', text: 'baranovdmitriy87@mail.ru' },
    { icon: '🏠', text: 'Москва, Россия' }
  ];

  return (
    <div className={s.info}>
      <img
        src="https://basik.ru/images/jason_lee_childs/085_jason_lee_childs.jpg"
        alt="Аватар"
        className={s.avatar}
      />

      <div className={s.user}>
        <h2>Дмитрий Баранов</h2>
        <p>Добро пожаловать на мою страницу!</p>

        <div className={s.contacts}>
          {contacts.map((contact, index) => (
            <div key={index} className={s.item}>
              <span>{contact.icon}</span> {contact.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
