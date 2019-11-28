import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from '../../api/api'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    setCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        this.props.toggleIsFetching(true)
        UsersAPI.getUsers(numberPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : <Users currentPage={this.props.currentPage}
                                          totalUsersCount={this.props.totalUsersCount}
                                          pageSize={this.props.pageSize}
                                          setCurrentPage={this.setCurrentPage}
                                          usersPage={this.props.usersPage}
                                          unfollow={this.props.unfollow}
                                          follow={this.props.follow}
                                          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                                          followingIsProgress={this.props.followingIsProgress}
                    />}

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

let mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
