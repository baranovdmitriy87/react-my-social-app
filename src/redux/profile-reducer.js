const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { message: 'Привет! Как дела?', likesCount: 10 },
    { message: 'Это мой первый пост на этой странице', likesCount: 25 },
    { message: 'Very cool, I am very happy', likesCount: 35 }
  ],

  newPostText: "Hello World",
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          { id: state.posts, message: state.newPostText, likesCount: 100 }
        ]
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;
