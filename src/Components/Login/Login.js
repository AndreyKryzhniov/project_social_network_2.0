import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../validators/validators";
import {connect} from "react-redux";
import {loginThunkAC, logoutThunkAC} from "../../redux/auth-reduce";
import {Redirect} from "react-router-dom";
import s from ".././common/FormsControls/FormsControls.module.css"


let maxLength = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', Input, 'email', [required, maxLength])}
            {createField('Password', Input, 'password', [required, maxLength], {type: 'password'})}
            {createField(null, Input, 'rememberMe', null, {type: 'checkbox'}, 'remember me')}
            {captchaURL &&
            <div>
                {createField('Symbols from image', Input, 'captcha', [required])}
                <img src={captchaURL}/>
            </div>
            }
            {error && <div className={s.formSummaryError}>
                <span>{error}</span>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({loginThunkAC, isAuth, captchaURL}) => {
    const onSubmit = (formData) => {
        return (loginThunkAC(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunkAC, logoutThunkAC})(Login)