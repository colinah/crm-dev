import React from 'react';

import classes from './ProfileImage.module.scss'

const profileImg = require('../../../assets/profileImage.png')


const profileImage = () => {
    return (
        <div className={classes.Container}>
            <img src={profileImg} alt='User' className={classes.Image} />
        </div>
    )
}

export default profileImage