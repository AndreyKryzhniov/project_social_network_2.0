import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: action.data.isAuth
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const setUserDataThunkAC = () => async (dispatch) => {
    let response = await AuthAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}


export const loginThunkAC = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(setUserDataThunkAC())
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages : 'Error...maybe you are a bad person'
        let action = stopSubmit('login', {_error: messages})
        dispatch(action)
    }
}

export const logoutThunkAC = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}


export default authReducer
