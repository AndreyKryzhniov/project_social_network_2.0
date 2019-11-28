import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {lookingForAJob, setUserProfile} from "../../redux/profile-reduce";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId = 4917}
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
                this.props.lookingForAJob(true)
            })
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
        lookingForAJob: state.profilePage.lookingForAJob
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, lookingForAJob})(WithUrlDataContainerComponent);
