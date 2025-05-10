const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-POST-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Привет! Как дела?', likesCount: 10 },
        { message: 'Это мой первый пост на этой странице', likesCount: 25 },
        { message: 'Very cool, I am very happy', likesCount: 35 }
      ],

      newPostText: 'My-social App on React'
    },

    dialogsPage: {
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
    },

    sideBar: {
      friends: [
        { id: 1, name: 'Никитос', avatar: 'ava1', },
        { id: 2, name: 'Наташа', avatar: 'ava2', },
        { id: 3, name: 'Дмитрий', avatar: 'ava3' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.newPostText = ''
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store
window.store = store
