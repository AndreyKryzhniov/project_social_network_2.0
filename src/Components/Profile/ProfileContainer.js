import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkAC,
    lookingForAJob,
    setUserProfileThunkAC, updateStatusThunkAC, savePhotoTC, saveProfileTC
} from "../../redux/profile-reduce";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setUserProfileThunkAC(userId)
        this.props.getStatusThunkAC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        lookingForAJob: state.profilePage.lookingForAJob,
        userId: state.auth.id,
        large: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setUserProfileThunkAC,
            lookingForAJob,
            getStatusThunkAC,
            updateStatusThunkAC,
            savePhotoTC,
            saveProfileTC
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
