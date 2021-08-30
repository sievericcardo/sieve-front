import banner from '../../assets/img/base-img/home-banner.webp';

import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

import Banner from '../assets/Banner';
import Projects from '../projects/Projects';
import Articles from '../articles/Articles';

import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import Twitter from '@material-ui/icons/Twitter';

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
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: '1.2em',
    margin: 'auto',
    justifyContent: 'center',
  },
  links: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '15px',
  },
  largeIcon: {
    width: '2.3em',
    height: '2.3em',
  },
});

const Home = () => {
  const classes = useStyles();

  return(
    <div className={ classes.base }>
      <Banner childToParent={[banner, "Home page banner"]}/>
      <div className={ classes.mainContent }>
        <Typography variant="h1" className={ classes.homeTitle}>
          My personal portfolio - come see me on other platform as well
        </Typography>
        <div className={ classes.icons }>
          <a href="https://www.linkedin.com/in/sieve-riccardo/" rel="noreferrer" className={ classes.links } target="_blank">
            <LinkedIn className={ classes.largeIcon } />
          </a>
          <a href="https://github.com/sievericcardo/" rel="noreferrer" className={ classes.links } target="_blank">
            <GitHub className={ classes.largeIcon } />
          </a>
          <a href="https://twitter.com/RiccardoSieve" rel="noreferrer" className={ classes.links } target="_blank">
            <Twitter className={ classes.largeIcon } />
          </a>
        </div>
        <Typography variant="h3" className={ classes.subTitle}>
          My projects
        </Typography>
        <Projects />
        <Typography variant="h3" className={ classes.subTitle}>
          My posts
        </Typography>
        <Articles />
      </div>
    </div>
  )
};

export default Home;
