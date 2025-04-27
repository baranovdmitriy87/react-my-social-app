import React from "react";
import s from './../Dialogs.module.css';

const MessagesSent = (props) => {
  return (
    <div className={s.message + ' ' + s.sent}>
      <div className={s.info}>
        <span className={s.author}>Димас</span>
        <span className={s.time}>10:02</span>
      </div>
      <p className={s.text}>{props.message}</p>
    </div>
  )
}

export default MessagesSent
