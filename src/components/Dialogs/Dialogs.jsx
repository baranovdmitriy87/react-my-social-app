import Messages from './Messages/Messages';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from '../Dialogs/Dialogs.module.css';

const Dialog = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
  let messagesElements = state.messages.map(el => <Messages message={el.message} />)
  let newMessageBody = state.newMessageBody

  const onSendMessage = () => {
    debugger
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (e) => {
    debugger
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsWrapper}>
        <ul className={s.dialogsList}>
          <div>
            {dialogElements}
          </div>
        </ul>
      </div>

      <div className={s.messages}>
        <div className={s.messagesContainer}>
          <textarea className={s.field}
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Напишите сообщение' />
          <button type='button' className={s.button}
            onClick={onSendMessage}>Отправить</button>
          <div>
            {messagesElements}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
