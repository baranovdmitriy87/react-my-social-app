import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {

  return (
    <div className={s.message}>
      <div className={s.info}>
        <span className={s.author}>Никитос</span>
        <span className={s.time}>10:00</span>
        <p className={s.text}>{props.message}</p>
      </div>
    </div>
  )
}

export default Messages
