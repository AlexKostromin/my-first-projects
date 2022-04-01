import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://w-dog.ru/wallpapers/16/18/337785071538579/avatara-glaz-sinij-avatar.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}
export default Post;
