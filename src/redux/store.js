import dialogsReduser from "./dialogs-reduser"
import profileReduser from "./profile-reduser"
import sidebarReduser from "./sidebar-reduser"
import usersReducer from "./users-reduser"

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Привет! Как дела?', likesCount: 10 },
        { message: 'Это мой первый пост на этой странице', likesCount: 25 },
        { message: 'Very cool, I am very happy', likesCount: 35 }
      ],

      newPostText: ""
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
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.profilePage = dialogsReduser(this._state.dialogsPage, action);
    this._state.profilePage = sidebarReduser(this._state.sidebarPage, action);
    this._state.usersPage = usersReducer(this._state.usersPage, action);
    this._callSubscriber(this._state);
  }
}

export default store
window.store = store
