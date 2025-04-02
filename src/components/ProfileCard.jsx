import React from 'react';
import '../App.css';

const ProfileCard = () => {
  const contacts = [
    { icon: '📱', text: '+7 (123) 456-78-90' },
    { icon: '✉️', text: 'user@example.com' },
    { icon: '🏠', text: 'Москва, Россия' }
  ];

  return (
    <div className="profile-card">
      <img
        src="https://avatars.mds.yandex.net/i?id=bd172841fc20b1aabb3ca214a1fcb7e5be0048a7-10467522-images-thumbs&n=13"
        alt="Обложка"
        className="cover-photo"
      />

      <div className="profile-info">
        <img
          src="https://basik.ru/images/jason_lee_childs/085_jason_lee_childs.jpg"
          alt="Аватар"
          className="avatar"
        />

        <div className="user-details">
          <h2>Дмитрий Баранов</h2>
          <p>Добро пожаловать на мою страницу!</p>

          <div className="contacts">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item">
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
