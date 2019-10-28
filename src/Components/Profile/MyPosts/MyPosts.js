import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea className={s.textarea}>New message</textarea>
                <div>
                <button>Send</button>
                </div>
            </div>
            {postElement}
        </div>
    );
}

export default MyPosts;
