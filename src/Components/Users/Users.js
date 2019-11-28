import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../Images/Deafult-Profile-Pitcher.png";
import {NavLink} from "react-router-dom";
import {UnfollowAPI, FollowAPI} from '../../api/api'


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let unfollow = (u, userId) => {
        props.toggleIsFollowingProgress(true, userId)
        UnfollowAPI.getUnfollow(u).then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(userId)
                }
            props.toggleIsFollowingProgress(false, userId)
        })
    }

    let follow = (u, userId) => {
        props.toggleIsFollowingProgress(true, userId)
        FollowAPI.getFollow(u).then(data => {
            if (data.resultCode === 0) {
                props.follow(userId)
            }
            props.toggleIsFollowingProgress(false, userId)
        })
    }

    return <div>
        <div>
            {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.setCurrentPage(p)
                                 }}>{p} </span>
                }
            )}
        </div>
        {
            props.usersPage.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.smallAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() =>{unfollow(u, u.id)}}>Unfollow</button>
                        : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {follow(u, u.id)}}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>)}
    </div>
}

export default Users