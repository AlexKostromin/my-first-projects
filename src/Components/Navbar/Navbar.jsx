import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
const Navbar =() => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to ="./profile" className = { m => m.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className = { m => m.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/News" className = { m => m.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Music" className = { m => m.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/Settings" className = { m => m.isActive ? s.active : s.item }>Setting</NavLink>
        </div>
    </nav>
}
export default Navbar;
