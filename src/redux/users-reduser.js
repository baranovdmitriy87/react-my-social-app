const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT' /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 21,
  currentPage: 3
};

const usersReducer = (state = initialState, action) => {

  // Формируем новый объект
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
      return {
        ...state,
        users: action.users
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case SET_TOTAL_USER_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count
      }
    }

    default:
      return state;
  }
}

// Создаем ActionCreator(AC), чтобы задиспатчить экшн
// и выполнить то или иное действие при обработчике
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, count: totalUsersCount })

export default usersReducer;
