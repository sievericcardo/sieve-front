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
  homeSubTitle: {
    fontSize: '2.1em',
    marginBottom: '1em',
  },
  subTitle: {
    borderBottom: '3px solid black',
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
          My personal portfolio
        </Typography>
        <Typography variant="body1">
          Since I was very little I had a passion for technology, playing games and trying to figure out how they worked and how they were created; I can still remember the hours playing Final Fantasy X and trying to understand how that characters could move, how the various event were handled and how everything was so perfectly scripted.
          During high school I started learning C with the Kernighan Ritchie manual, and learning a bit of C++ and Java as well. During the last two years I also started learning HTML and Blender for 3D art (I was still mesmerized with the beauty of Final Fantasy X and I wanted to be able to create that).
        </Typography>
        <p>&nbsp;</p>
        <Typography variant="body1">
          After an initial study in computer engineering, I decided to move into computer science to have the chance to work more on programming projects and have a higher knowledge in languages, algorithms, compilers and the functionalities of the computer architecture.
        </Typography>
        <p>&nbsp;</p>
        <Typography variant="body1">
          Even now that passion still lies and I keep learning and studying to improve and I constantly look for challenges and improvement possibilities.
        </Typography>
        <p>&nbsp;</p>
        <Typography variant="h2" className={ classes.homeSubTitle}>
          Come see me on other platform as well
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
