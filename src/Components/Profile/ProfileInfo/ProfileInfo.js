import React from 'react';
import s from './ProfileInfo.module.css';
import avatarProfile from '../../../Images/AvatarProfile.jpg'
import panorama from '../../../Images/ImgProfile.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.fon}
                     src={panorama}/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src={avatarProfile}/>
                <span>Name: Andrey Kryzhniov</span>
                <span>Age: 25</span>
            </div>
        </div>
    );
}

export default ProfileInfo;
