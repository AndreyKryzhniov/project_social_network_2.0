import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatusThunkAC}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src={profile.photos.large}/>
                <div>
                    <span>{profile.fullName}</span>
                </div>
                <ProfileStatusWithHooks status={status} updateStatusThunkAC={updateStatusThunkAC}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
