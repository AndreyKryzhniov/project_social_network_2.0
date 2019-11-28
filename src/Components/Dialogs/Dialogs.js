import React from 'react';
import s from './Dialogs.module.css';
import m from "../Profile/MyPosts/MyPosts.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let message = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messages = state.messages.map(m => <Message message={m.message} key={m.id} m={m.id}/>)

    let newMessageBody = state.newMessage


    let addMessage = () => {
        props.addMessageAction()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {message}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea
                    className={m.textarea}
                    onChange={onNewMessageChange}
                    value={newMessageBody}/>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
