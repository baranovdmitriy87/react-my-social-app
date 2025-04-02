import React from 'react';
import s from './ProfileCard.module.css';

const ProfileCard = () => {
  const contacts = [
    { icon: '📱', text: '+7 (123) 456-78-90' },
    { icon: '✉️', text: 'user@example.com' },
    { icon: '🏠', text: 'Москва, Россия' }
  ];

  return (
    <div className={s.profile}>
      <img
        src="https://avatars.mds.yandex.net/i?id=bd172841fc20b1aabb3ca214a1fcb7e5be0048a7-10467522-images-thumbs&n=13"
        alt="Обложка"
        className={s.photo}
      />

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
    </div>
  );
};

export default ProfileCard;
