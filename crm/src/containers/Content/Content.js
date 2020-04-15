import React from 'react'; 
import { Switch, Route , Redirect } from 'react-router-dom';
import ContentNav from '../../components/Content/Nav/ContentNav';
import Activity from '../../components/Content/Activity/Activity';
import Agreements from '../../components/Content/Agreements/Agreements';
import Bills from '../../components/Content/Bills/Bills';
import classes from './Content.module.scss';

const content = () => {
    return(
        <div className={classes.ContentContainer}>
            <ContentNav />
            <Switch>
                <Route path="/activity" component ={ Activity } />
                <Route path="/agreements" component = { Agreements } />
                <Route path="/bills" component = { Bills } />
                <Route path="/" component={ Activity } />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default content;