import banner from '../../assets/img/base-img/home-banner.webp';

import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import Banner from '../assets/Banner';

const useStyles = makeStyles({
  mainContent: {
    position: 'relative',
    clear: 'all',
    marginTop: '5vh',
    width: '80vw',
    margin: 'auto',
  },
  homeTitle: {
    fontSize: '3.1em',
  },
});

const Home = () => {
  const classes = useStyles();

  return(
    <div>
      <Banner childToParent={[banner, "Home page banner"]}/>
      <div className={ classes.mainContent }>
        <Typography variant="h1" className={ classes.homeTitle}>
          A simple blog for tech enthusiasts
        </Typography>
      </div>
    </div>
  )
};

export default Home;
