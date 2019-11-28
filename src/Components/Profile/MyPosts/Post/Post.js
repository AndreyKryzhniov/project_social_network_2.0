import React from 'react';
import s from './Post.module.css';
import smallAvatar from '../../../../Images/smallAvatar.png'

const Post = (props) => {
    return (
        <div className={s.container}>
            <div>
                <img className={s.smallAvatar}
                     src={smallAvatar}/>
            </div>
            <div className={s.content}>
                <span className={s.item}>{props.message}</span>
                <span className={s.item}>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
