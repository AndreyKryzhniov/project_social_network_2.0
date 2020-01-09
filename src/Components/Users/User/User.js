import React from 'react'
import s from "../Users.module.css";
import userPhoto from "../../../Images/Deafult-Profile-Pitcher.png";
import {NavLink} from "react-router-dom";

const User = (props) => {

    return(
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={s.smallAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed ? <button disabled={props.followingIsProgress.some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user, props.user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user, props.user.id)
                        }}>Follow</button>}
                </div>
            </span>
        <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
    </div>
   )
}

export default User