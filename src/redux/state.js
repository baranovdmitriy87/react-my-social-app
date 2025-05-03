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
        { id: 6, name: 'Константин' }
      ],

      messages: [
        { id: 1, message: 'Привет! Как дела?' },
        { id: 2, message: 'Чем занимаешься?' },
        { id: 3, message: 'Когда освободишься?' }
      ],

      newMessageText: 'new message'

      // messagesSent: [
      //   { id: 1, message: 'Всё отлично, спасибо!' },
      //   { id: 2, message: 'Программирую на React' },
      //   { id: 3, message: 'Минут через 40' }
      // ],
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
    debugger
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },

  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(text) {
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber(this._state);
  },


}

export default store
window.store = store
