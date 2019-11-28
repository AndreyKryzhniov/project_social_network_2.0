import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let postElement = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea className={s.textarea} ref={newPostElement} onChange={onPostChange}
                          value={props.profilePage.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Send</button>
                </div>
            </div>
            {postElement}
        </div>
    );
}

export default MyPosts;
