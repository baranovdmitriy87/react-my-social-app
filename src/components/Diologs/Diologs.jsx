import React from "react";
import s from '../Diologs/Diologs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id

  return (
    <li className={s.item}>
      <NavLink to={path}> {props.name} </NavLink>
    </li>
  )
}

const Message = (props) => {
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

const MessageSent = (props) => {
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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsWrapper}>
        <ul className={s.dialogsList}>

          <DialogItem name="Димас" id="1" />
          <DialogItem name="Наташа" id="2" />
          <DialogItem name="Владимир" id="3" />
          <DialogItem name="Миша" id="4" />
          <DialogItem name="Никитос" id="5" />
          <DialogItem name="Константин" id="6" />
        </ul>
      </div>

      <div className={s.messages}>
        <div className={s.messagesContainer}>
          <Message message="Привет! Как дела?" />
          <MessageSent message="Всё отлично, спасибо!" />
          <Message message="Чем занимаешься?" />
          <MessageSent message="Программирую на react" />
          <Message message="Когда освободишься?" />
          <MessageSent message="Минут через 40 " />
          <Message message="ОК, я на связи, пиши-звони" />
          <MessageSent message="Договорились" />
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
