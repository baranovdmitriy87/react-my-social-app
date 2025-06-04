const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {
      id: 1, photoURl: 'https://avatars.mds.yandex.net/i?id=02afe8b50d1332f5193e4cc4731a6bd594cce47d-12422391-images-thumbs&n=13',
      followed: false, fullName: 'Константин', status: 'I am a Boss', location: { city: 'Moscow', country: 'Russia' }
    },
    {
      id: 2, photoURl: 'https://avatars.mds.yandex.net/i?id=88fda53666c588bafc8172da9b6425bb4944ceb0-5345859-images-thumbs&n=13',
      followed: true, fullName: 'Дмитрий', status: 'I am a Boss too', location: { city: 'St.Peterburg', country: 'Russia' }
    },
    {
      id: 3, photoURl: 'https://avatars.mds.yandex.net/i?id=c971d15dcd2e4b688e79fbe0ee1ad66bfa1e3b2b-5879061-images-thumbs&n=13',
      followed: false, fullName: 'Владимир', status: 'I am a Boss too', location: { city: 'Rostov', country: 'Russia' }
    },
  ],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...state.action.users] }
    }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
