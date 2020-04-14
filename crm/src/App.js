import React from 'react';
import Banner from './containers/Banner/Banner';
import Profile from './components/Profile/Profile';
import Content from './containers/Content/Content';
import classes from './App.module.scss';


function App() {
  return (
    <div>
      <div className={classes.BannerContainer}>
        <Banner />
      </div>
      <div className={classes.PageContainer}>
        <div className={classes.ProfileContainer}>
          <Profile />
        </div>
        <div className={classes.ContentContainer} style={{padding: '20px'}}>
          <Content />
        </div>
        <div className={classes.SideBarContainer}>
          <div>Side Bar</div>
        </div>
      </div>
    </div>

  );
}

export default App;
