import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ContentNav.module.scss';

const contentNav = () => {
 return (
     <div className={classes.ContentNavContainer}>
         <div className={classes.NavItemContainer}>
             <div><NavLink aciveClassName={classes.NavItemContainerActive} to="/activity" className={classes.NavLink}>Acitvity</NavLink></div>
         </div>
         <div className={classes.NavItemContainer}>
            <div><NavLink aciveClassName={classes.NavItemContainerActive} to="/agreements" className={classes.NavLink}>Quotes & Contracts</NavLink></div>
         </div>
         <div className={classes.NavItemContainer}>
            <div><NavLink aciveClassName={classes.NavItemContainerActive} to="/bills" className={classes.NavLink}>Bills</NavLink></div>
         </div>
     </div>
 )
}

export default contentNav;