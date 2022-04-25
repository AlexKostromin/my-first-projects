const FOLLOW = 'FOLLOW'
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [

    ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId)    /*если id совпадает, то мы возвращаем копию, если не совпадает, то возвращаем тот же объект*/
                        return {...u, followed: true}
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId)    /*если id совпадает, то мы возвращаем копию, если не совпадает, то возвращаем тот же объект*/
                        return {...u, followed: false}
                    return u
                })
            }
        case SET_USERS: {
             return {...state, users: [...action.users]}   /*добавляем новых пользователей в массив с сервера*/
        }
        case SET_CURRENT_PAGE: {
             return {...state, currentPage: action.currentPage}   /*добавляем новых пользователей в массив с сервера*/
        }
        case SET_TOTAL_USERS_COUNT: {
             return {...state, totalUsersCount: action.count}   /*добавляем новых пользователей в массив с сервера*/
        }
        default:
            return state
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCounteAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

export default usersReducer