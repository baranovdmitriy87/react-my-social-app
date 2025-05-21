const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    { id: 1, name: 'Димас' },
    { id: 2, name: 'Наташа' },
    { id: 3, name: 'Владимир' },
    { id: 4, name: 'Миша' },
    { id: 5, name: 'Никитос' },
  ],

  messages: [
    { id: 1, message: 'Привет! Как дела?' },
    { id: 2, message: 'Чем занимаешься?' },
    { id: 3, message: 'Когда освободишься?' },
    { id: 4, message: 'Я все' },
    { id: 5, message: 'Урааааа' }
  ],

  newMessageBody: ""
}

const dialogsReduser = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser;
