import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captchaURL}})

export const setUserDataThunkAC = () => async (dispatch) => {
    let response = await AuthAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}


export const loginThunkAC = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setUserDataThunkAC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaTC())
        }
        let messages = response.data.messages.length > 0 ? response.data.messages : 'Error...maybe you are a bad person'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logoutThunkAC = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaTC = () => async (dispatch) => {
    let response = await AuthAPI.getSecurity()
    let captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}


export default authReducer
