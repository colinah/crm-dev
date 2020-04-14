import React from 'react';
import ProfileImage from '../Image/ProfileImage';
import classes from './User.module.scss'

const user = () => {
    return (
        <div className={classes.UserContainer}>
            <div className={classes.ImageContainer}>
                <ProfileImage />
            </div>
            <div className={classes.NameContainer}>
                <h1 className={classes.Name}>Julian Jovolty</h1>
            </div>
        </div>
    )
}

export default user