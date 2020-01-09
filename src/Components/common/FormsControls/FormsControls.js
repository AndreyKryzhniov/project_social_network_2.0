import React from "react";
import s from "./FormsControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {

    let hasError = touched && error

    return (
        <div className={hasError ? s.formControl + ' ' + s.error : null}>
            <div>{children}</div>
            {hasError ? <span>{error}</span> : null}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea  {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input  {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, component, name, validate, props = {}, text = '') => {
    return (
        <div>
            <Field validate={validate} component={component} placeholder={placeholder} name={name}{...props}/> {text}
        </div>)
}
