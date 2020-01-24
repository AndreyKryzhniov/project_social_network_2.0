import {userProfile} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USERS_PROFILE = 'samurai-network/profile/SET_USERS_PROFILE';
const LOOKING_FOR_A_JOB = 'samurai-network/profile/LOOKING_FOR_A_JOB';
const CHANGE_STATUS = 'samurai-network/profile/CHANGE_STATUS';
const SET_STATUS = 'samurai-network/profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE = 'samurai-network/profile/SAVE_PROFILE'

let initialState = {
    posts: [
        {id: '1', message: 'Hi!', likesCount: '20'},
        {id: '2', message: 'How are you?', likesCount: '2'}
    ],
    profile: null,
    // lookingForAJob: true,
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
// export const saveProfile = (profile) => ({type: SAVE_PROFILE, profile})

export const setUserProfileThunkAC = (userId) => async (dispatch) => {
    if (!userId) {
        userId = 4917
    }
    let response = await userProfile.getProfile(userId)
    dispatch(setUserProfile(response.data))
}


export const getStatusThunkAC = (UserId) => async (dispatch) => {
    let response = await userProfile.getStatus(UserId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunkAC = (status) => async (dispatch) => {
    let response = await userProfile.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(changeStatus(status))
    }
}

export const savePhotoTC = (file) => async (dispatch) => {
    let response = await userProfile.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileTC = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await userProfile.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(setUserProfileThunkAC(userId))
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer