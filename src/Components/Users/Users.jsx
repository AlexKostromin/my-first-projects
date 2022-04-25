import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/ava-vk-cats-92.jpg";


let Users = (props) => {
    const PAGES_LENGTH = 5; /*отображение  5 страниц из всех*/
    const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize); /*отображение  5 страниц из всех*/
    const pagesCount = totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH; /*отображение  5 страниц из всех*/
    const half = Math.floor(pagesCount / 2);                 /*отображение  5 страниц из всех*/
    let startPage = props.currentPage - half; /*отображение  5 страниц из всех*/
    if (startPage < 1) startPage = 1; /*отображение  5 страниц из всех*/
    if ((startPage + pagesCount) > totalPagesCount) startPage = totalPagesCount - pagesCount; /*отображение  5 страниц из всех*/

    const pages = []; /*отображение  5 страниц из всех*/
    for (let i = startPage; i < startPage + PAGES_LENGTH; i++) { /*отображение  5 страниц из всех*/
        pages.push(i); /*отображение  5 страниц из всех*/
    }
    return <div>
        <div>
            {pages.map(p => {
                debugger
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {props.onPageChanged(p)
                             }}> {p}</span> /*если верно, то выделяем номер страницы жирным*/
            })}

        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>} {/*тринарное выражение*/}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
        }
    </div>
}
export default Users