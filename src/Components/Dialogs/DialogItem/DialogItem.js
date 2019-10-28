import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import smallAvatar from "../../../Images/smallAvatar.png";

const DialogItem = (props) => {
    let path = '/message/' + props.id
    return <div className={s.dialog}>
        <img src={smallAvatar} className={s.smallAvatar}/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
