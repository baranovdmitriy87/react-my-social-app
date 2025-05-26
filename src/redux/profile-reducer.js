const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
  posts: [
    { message: 'Привет! Как дела?', likesCount: 10 },
    { message: 'Это мой первый пост на этой странице', likesCount: 25 },
    { message: 'Very cool, I am very happy', likesCount: 35 }
  ],

  newPostText: "Hello World"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          { id: state.posts, message: state.newPostText, likesCount: 100 }
        ]
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;
