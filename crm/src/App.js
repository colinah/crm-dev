import React from 'react';
import Banner from './containers/Banner/Banner';
import classes from './App.module.scss';


function App() {
  return (
    <div>
      <div className={classes.BannerContainer}>
        <Banner />
      </div>
      <div className={classes.PageContainer}>
        <div className={classes.ProfileContainer}>
          <div>Profile info</div>
        </div>
        <div className={classes.ContentContainer}>
          <div>Page Content</div>
        </div>
        <div className={classes.SideBarContainer}>
          <div>Side Bar</div>
        </div>
      </div>
    </div>

  );
}

export default App;
