import React from "react";
import Messages from './Messages/Messages';
import MessagesSent from './MessagesSent/MessagesSent';
import DialogItem from './DialogItem/DialogItem';

import s from '../Dialogs/Dialogs.module.css';

const Dialog = (props) => {

  let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map(m => <Messages message={m.message} />)
  let messagesSentElemen = props.state.messagesSent.map(ms => <MessagesSent message={ms.message} />)

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
      </div>
    </div>
  )
}

export default Dialog;
