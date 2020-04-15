import React from 'react';
import classes from './Post.module.scss';

const post = (props) => {
    return( 
        <div className={classes.PostContainer}>
            <div className={classes.PostHeaderContainer}>
                <div className={classes.postType}>
                    {props.type}
                </div>
                <div className={classes.postDate}>
                    {props.date}
                </div>
            </div>
            <div className={classes.PostTitle}>{props.projectName}</div>
            <div className={classes.PostLink}>{props.link}</div>
        </div>
    )
}

export default post

