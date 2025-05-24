import Messages from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import s from '../Dialogs/Dialogs.module.css';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
  let messagesElements = state.messages.map(el => <Messages message={el.message} />)
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
          <button className={s.button}
            onClick={onSendMessageClick}>Отправить</button>
          <div>
            {messagesElements}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
