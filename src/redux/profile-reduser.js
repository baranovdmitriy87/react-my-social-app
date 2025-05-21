const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
  posts: [
    { message: 'Привет! Как дела?', likesCount: 10 },
    { message: 'Это мой первый пост на этой странице', likesCount: 25 },
    { message: 'Very cool, I am very happy', likesCount: 35 }
  ],

  newPostText: ""
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPostText;
      state.newPostText = ''
      state.posts.push({
        id: 4,
        message: newPost,
        likesCount: 0
      });
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser;
