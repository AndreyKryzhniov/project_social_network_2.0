import React from 'react';
import s from './Dialogs.module.css';
import m from "../Profile/MyPosts/MyPosts.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let message = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messages = state.messages.map(m => <Message message={m.message} key={m.id} m={m.id}/>)


    let addNewMessage = (value) => {
        props.addMessageAction(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {message}
            </div>
            <div className={s.messages}>
                {messages}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const maxLength = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageBody'}
                placeholder={'Enter you message'}
                validate={[required, maxLength]}
            />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default Dialogs;
