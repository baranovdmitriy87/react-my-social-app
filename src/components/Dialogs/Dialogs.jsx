import React from "react";
import Messages from './Messages/Messages';
// import MessagesSent from './MessagesSent/MessagesSent';
import DialogItem from './DialogItem/DialogItem';
import s from '../Dialogs/Dialogs.module.css';

const Dialog = (props) => {

  const dialogElement = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
  const messagesElement = props.state.messages.map(el => <Messages message={el.message} />)
  // const messagesSentElemen = props.state.messagesSent.map(ms => <MessagesSent message={ms.message} />)

  const newMessageElement = React.createRef();

  const addMessage = () => {
    debugger
    let text = newMessageElement.current.value;
    props.addMessage(text)
  }

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    debugger
    props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsWrapper}>
        <ul className={s.dialogsList}>
          {dialogElement}
        </ul>
      </div>

      <div className={s.messages}>
        <div className={s.messagesContainer}>
          <textarea className={s.field}
            ref={newMessageElement}
            value={props.newMessageText}
            onChange={onMessageChange}
            name="new-message" id="new-message" placeholder='Напишите сообщение' />
          <button type='button' className={s.button}
            onClick={addMessage}>Отправить</button>
          {messagesElement}
          {/* {messagesSentElemen} */}
        </div>
      </div>
    </div>
  )
}

export default Dialog;
