import Preloader from '../../common/Preloader';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = [
    { icon: '📱', text: '+7 (906) 735-11-37' },
    { icon: '✉️', text: 'baranovdmitriy87@mail.ru' },
    { icon: '🏠', text: 'Москва, Россия' }
  ];


  return (
    <div className={style.info}>

      <img src={props.profile.photos.large}
        alt={`${props.profile.fullName || 'User'}'s avatar`}
        className={style.avatar}
      />

      <div className={style.user}>
        <h2>Дмитрий Баранов</h2>
        <p>Добро пожаловать на мою страницу!</p>

        <div className={style.contacts}>
          {contacts.map((contact, index) => (
            <div key={index} className={style.item}>
              <span>{contact.icon}</span> {contact.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
