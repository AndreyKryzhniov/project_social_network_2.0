import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(20)

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                placeholder={'Enter you message'}
                name={'newPost'}
                validate={[required, maxLength]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MyPosts = React.memo(props => {

    let postElement = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    let onAddPost = (value) => {
        props.addPost(value.newPost)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <MyPostReduxForm onSubmit={onAddPost}/>
            </div>
            {postElement}
        </div>
    );
})

const MyPostReduxForm = reduxForm({form: 'newPost'})(MyPostForm)



export default MyPosts;
