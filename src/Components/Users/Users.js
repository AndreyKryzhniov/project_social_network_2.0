import React from 'react'

import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {

    let unfollow = (u, userId) => {
        props.unfollow(u, userId)
    }

    let follow = (u, userId) => {
        props.follow(u, userId)
    }

    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   setCurrentPage={props.setCurrentPage} />
        {props.usersPage.map(u => <User {...props} unfollow={unfollow} follow={follow} user={u}  key={u.id}/>)}
    </div>
}

export default Users