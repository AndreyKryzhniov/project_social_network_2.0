import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import s from "../../../common/FormsControls/FormsControls.module.css";
// import {required} from "../../../validators/validators";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
            {error && <div className={s.formSummaryError}>
                <span>{error}</span>
            </div>}
        </div>
        <div>
            <b>Full name:</b> {createField('Full name', Input, 'fullName', [])}
        </div>
        <div>
            <b>Looking fo a job:</b> {createField('', Input, 'lookingForAJob', null, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField('My professional skills', Textarea, 'lookingForAJobDescription', [])}
        </div>
        <div>
            <b>About me:</b>{createField('About me', Textarea, 'aboutMe', [])}
        </div>
        <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <div>
                <b>
                    {key}: {createField(key, Input, 'contacts.' + key, [])}
                </b>
            </div>
        })}</div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm