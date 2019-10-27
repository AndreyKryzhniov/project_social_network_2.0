import React from 'react';
import Post from "./Post/Post";
import m from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea className={m.textarea}>New message</textarea>
                <div>
                <button>Send</button>
                </div>
            </div>
            <Post message='Hi' likesCount='20'/>
            <Post message='Hi, how are you?' likesCount='2'/>
        </div>
    );
}

export default MyPosts;
