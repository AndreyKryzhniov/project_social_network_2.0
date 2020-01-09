import {getUserProfile, userProfileStatus} from "../api/api";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USERS_PROFILE = 'samurai-network/profile/SET_USERS_PROFILE';
const LOOKING_FOR_A_JOB = 'samurai-network/profile/LOOKING_FOR_A_JOB';
const CHANGE_STATUS = 'samurai-network/profile/CHANGE_STATUS';
const SET_STATUS = 'samurai-network/profile/SET_STATUS'

let initialState = {
    posts: [
        {id: '1', message: 'Hi!', likesCount: '20'},
        {id: '2', message: 'How are you?', likesCount: '2'}
    ],
    profile: null,
    lookingForAJob: true,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: '3', message: action.newPost, likesCount: '0'}]
            }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case LOOKING_FOR_A_JOB: {
            return {
                ...state,
                lookingForAJob: action.lookingForAJob
            }
        }
        case CHANGE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const lookingForAJob = (lookingForAJob) => ({type: LOOKING_FOR_A_JOB, lookingForAJob})
export const changeStatus = (status) => ({type: CHANGE_STATUS, status})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfileThunkAC = (userId) => async (dispatch) => {
    if (!userId) {userId = 4917}
    let response = await getUserProfile.getProfile(userId)
            dispatch(setUserProfile(response.data))
            dispatch(lookingForAJob(true))
}


export const getStatusThunkAC = (UserId) => async (dispatch) => {
    let response = await userProfileStatus.getStatus(UserId)
                dispatch(setStatus(response.data))
}

export const updateStatusThunkAC = (status) => async (dispatch) => {
   let response = await userProfileStatus.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(changeStatus(status))
                }
}

export default profileReducer