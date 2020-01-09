import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkAC,
    lookingForAJob,
    setUserProfileThunkAC, updateStatusThunkAC
} from "../../redux/profile-reduce";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfileThunkAC(userId)
        this.props.getStatusThunkAC(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.profile,
        status: state.profilePage.status,
        lookingForAJob: state.profilePage.lookingForAJob,
        userId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setUserProfileThunkAC,
            lookingForAJob,
            getStatusThunkAC,
            updateStatusThunkAC
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
