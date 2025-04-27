import { rerenderEntireTree } from '../render';

const state = {

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

    messagesSent: [
      { id: 1, message: 'Всё отлично, спасибо!' },
      { id: 2, message: 'Программирую на React' },
      { id: 3, message: 'Минут через 40' }
    ]
  },

  sideBar: {
    friends: [
      { id: 1, name: 'Никитос', avatar: 'ava1', },
      { id: 2, name: 'Наташа', avatar: 'ava2', },
      { id: 3, name: 'Дмитрий', avatar: 'ava3' }
    ]
  }
}


export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}


export default state
