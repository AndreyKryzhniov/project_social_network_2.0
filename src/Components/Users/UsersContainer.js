import React from 'react';
import {connect} from "react-redux";
import {
    followThunkAC, getUsersThunkAC,
    setCurrentPageThunkAC,
    unfollowThunkAC
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingIsProgress,
    getIsFetching, getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize, getUsersThunkAC} = this.props
        getUsersThunkAC(currentPage, pageSize)
    }

    setCurrentPage = (numberPage) => {
        let {setCurrentPageThunkAC, pageSize} = this.props
        setCurrentPageThunkAC(numberPage, pageSize)
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
                                          unfollow={this.props.unfollowThunkAC}
                                          follow={this.props.followThunkAC}
                                          auth={this.props.auth}
                                          // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                                          followingIsProgress={this.props.followingIsProgress}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {getUsersThunkAC,
        setCurrentPageThunkAC,
        followThunkAC,
        unfollowThunkAC}),
    withRouter,
    withAuthRedirect
)(UsersContainer)
