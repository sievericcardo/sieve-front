import banner from '../../assets/img/base-img/home-banner.webp';

import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import Banner from '../assets/Banner';
import Projects from '../projects/Projects';
import Articles from '../articles/Articles';

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
    marginBottom: '1em',
  },
  subTitle: {
    borderBottom: '3px solid white',
    fontSize: '2.3em',
    marginBottom: '0.5em',
    marginTop: '1.2em',
    padding: '15px',
    textAlign: 'center',
  }
});

const Home = () => {
  const classes = useStyles();

  return(
    <div className={ classes.base }>
      <Banner childToParent={[banner, "Home page banner"]}/>
      <div className={ classes.mainContent }>
        <Typography variant="h1" className={ classes.homeTitle}>
          A simple blog for tech enthusiasts
        </Typography>
        <Typography variant="h3" className={ classes.subTitle}>
          My projects
        </Typography>
        <Projects />
        <Typography variant="h3" className={ classes.subTitle}>
          My articles
        </Typography>
        <Articles />
      </div>
    </div>
  )
};

export default Home;
