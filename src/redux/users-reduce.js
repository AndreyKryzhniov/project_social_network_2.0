import {FollowAPI, UnfollowAPI, UsersAPI} from "../api/api";
import {followUnfollow} from "../Components/common/helperComponent/functionsCase";

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    followingIsProgress: [],
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: followUnfollow(state.users, 'id', action.userId, {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: followUnfollow(state.users, 'id', action.userId, {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkAC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount))
}

export const setCurrentPageThunkAC = (numberPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(numberPage))
    dispatch(toggleIsFetching(true))
    let response = await UsersAPI.getUsers(numberPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
}

const followUnfollowFlow = async (dispatch, u, userId, apiMethod, actionCreator) => {
    await dispatch(toggleIsFollowingProgress(true, userId))
    let response = apiMethod
    if (response.data.resultCode === 0) {
        dispatch(actionCreator)
    }
    await dispatch(toggleIsFollowingProgress(false, userId))
}

export const followThunkAC = (u, userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, u, userId, await FollowAPI.getFollow(u), follow(userId))
}

export const unfollowThunkAC = (u, userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, u, userId, await UnfollowAPI.getUnfollow(u), unfollow(userId))
}




export default usersReducer