import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://res.allmacwallpaper.com/get/Retina-MacBook-Pro-15-inch-wallpapers/Mountains-Valley-2880x1800/7797-8.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;
