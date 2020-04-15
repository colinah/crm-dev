import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './ContentNav.module.scss';

class ContentNav extends Component {
    render(){
        return (
            <div className={classes.ContentNavContainer}>
                    <NavLink  
                        to="/activity"
                        activeClassName={classes.ActiveLink}
                        className={classes.NavItem}
                        >Acitvity
                    </NavLink>
                    <NavLink  
                        to="/agreements"
                        activeClassName={classes.ActiveLink}
                        className={classes.NavItem}
                        >Quotes & Contracts
                    </NavLink>
                    <NavLink  
                        to="/bills"
                        activeClassName={classes.ActiveLink}
                        className={classes.NavItem}
                        >Bills
                    </NavLink>
            </div>
        )
    }
}

export default ContentNav;