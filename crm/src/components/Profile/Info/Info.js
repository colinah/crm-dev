import React from 'react';
import classes from './Info.module.scss';

const info = () => {
    return (
        <div className={classes.InfoContainer}>
            <h2 className={classes.InfoTitle}>Contact Information</h2>
            <div className={classes.InfoGroup}>
                <div className={classes.InfoContentTitle}>First Name</div>
                <div className={classes.InfoContent}>Julian</div>
            </div>
            <div className={classes.InfoGroup}>
                <div className={classes.InfoContentTitle}>Last Name</div>
                <div className={classes.InfoContent}>Jovolty</div>
            </div>
            <div className={classes.InfoGroup}>
                <div className={classes.InfoContentTitle}>Email</div>
                <div className={classes.InfoContent}>Jovolty@Jo.com</div>
            </div>
            <div className={classes.InfoGroup}>
                <div className={classes.InfoContentTitle}>Phone</div>
                <div className={classes.InfoContent}>555-555-5555</div>
            </div>
            <div className={classes.InfoGroup}>
                <div className={classes.InfoContentTitle}>Business name</div>
                <div className={classes.InfoContent}>Jovolty Joey Jod</div>
            </div>

        </div>
    )
}

export default info;