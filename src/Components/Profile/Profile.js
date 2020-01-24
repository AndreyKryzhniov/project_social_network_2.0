import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatusThunkAC={props.updateStatusThunkAC}
                         isOwner={props.isOwner} savePhoto={props.savePhotoTC} saveProfileTC={props.saveProfileTC}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
