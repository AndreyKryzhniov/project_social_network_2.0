import React from 'react';
import s from './Dialogs.module.css';
import m from "../Profile/MyPosts/MyPosts.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let message = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {message}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea className={m.textarea}>New message</textarea>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
