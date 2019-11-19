import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../Images/Deafult-Profile-Pitcher.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages =[]
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                    return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {props.setCurrentPage(p)}}>{p} </span>
                }
            )}
        </div>
        {
            props.usersPage.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.smallAvatar}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button>}
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