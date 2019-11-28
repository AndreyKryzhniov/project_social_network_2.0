import React from 'react';
import s from './ProfileInfo.module.css';
import avatarProfile from '../../../Images/AvatarProfile.jpg'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let changeStatus = () => {

    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.fon}*/}
            {/*         src={panorama}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {/*<img className={s.avatar}*/}
                {/*     src={avatarProfile}/>*/}
                     <img className={s.avatar}
                     src={props.profile.photos.large}/>
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                {/*<span>{props.profile.lookingForAJobDescription}</span>*/}
                {/*{props.profile.lookingForAJob ? <span>Мне нужна работа</span> : <span>{props.profile.lookingForAJobDescription}</span>}*/}
                {/*<button onClick={changeStatus}>CHANGE STATUS</button>*/}
            </div>
        </div>
    );
}

export default ProfileInfo;
