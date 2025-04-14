import React from "react";
import s from '../Diologs/Diologs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id

  return (
    <li className={s.item}>
      <NavLink to={path} className={({ isActive }) =>
        isActive ? s.active : undefined}> {props.name} </NavLink>
    </li>
  )
}

const Messages = (props) => {

  return (
    <div className={s.message}>
      <div className={s.info}>
        <span className={s.author}>Никитос</span>
        <span className={s.time}>10:00</span>
      </div>
      <p className={s.text}>{props.message}</p>
    </div>
  )
}

const MessagesSent = (props) => {
  return (
    <div className={s.message + ' ' + s.sent}>
      <div className={s.info}>
        <span className={s.time}>10:02</span>
      </div>
      <p className={s.text}>{props.message}</p>
    </div>
  )
}

const Diologs = (props) => {

  let dialogs = [
    { id: 1, name: 'Димас' },
    { id: 2, name: 'Наташа' },
    { id: 3, name: 'Владимир' },
    { id: 4, name: 'Миша' },
    { id: 5, name: 'Никитос' },
    { id: 6, name: 'Константин' }
  ]

  let messages = [
    { id: 1, message: 'Привет! Как дела?' },
    { id: 2, message: 'Чем занимаешься?' },
    { id: 3, message: 'Когда освободишься?' }
  ]

  let messagesSentData = [
    { id: 1, message: 'Всё отлично, спасибо!' },
    { id: 2, message: 'Программирую на react' },
    { id: 3, message: 'Минут через 40' }
  ]

  let dialogElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = messages.map(m => <Messages message={m.message} />)
  let messagesSentElemen = messagesSentData.map(ms => <MessagesSent message={ms.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsWrapper}>
        <ul className={s.dialogsList}>
          {dialogElement}
        </ul>
      </div>

      <div className={s.messages}>
        <div className={s.messagesContainer}>
          {messagesElement}
          {messagesSentElemen}
        </div>

        {/* <form class="input">
          <div class="inputGroup">
            <input type="text" class="field" placeholder="Введите сообщение...">
              <button type="submit" class="sendBtn">Отправить</button>
          </div>
        </form> */}
      </div>
    </div>
  )
}

export default Diologs;
