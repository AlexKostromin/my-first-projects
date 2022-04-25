import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts                                   /*пропсы подтягиваем к постам*/
        .map(p => <Post message message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value                       /*придаем text значение введенного текста в поле ввода*/
           props.updateNewPostText(text);                               /*вызов функции, которая делает BLL раньше UI */
    }
    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {[postElements]}
            </div>
        </div>
    )
}
export default MyPosts;
