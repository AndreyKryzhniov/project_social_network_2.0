import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img className={p.fon}
                     src='http://steklo.fox-art.by/wp-content/uploads/2016/02/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-22.jpg'/>
            </div>
            <div>
                <img className={p.avatar}
                     src='https://andreykryzhniov.github.io/my_portfolio/static/media/Avatar.328dd7ac.jpg'/>
                    <span>Name: Andrey Kryzhniov</span>
                    <span>Age: 25</span>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
