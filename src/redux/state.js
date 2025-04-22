
let state = {

  profilePage: {
    posts: [
      { message: 'Привет! Как дела?', likesCount: 10 },
      { message: 'Это мой первый пост на этой странице', likesCount: 25 },
      { message: 'Very cool, I am very happy', likesCount: 35 }
    ]
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
  }
}

export default state
