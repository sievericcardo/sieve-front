import React from 'react';

import { makeStyles } from '@material-ui/core';

import Writeups from '../writeups/Writeups';

const useStyles = makeStyles({
  mainContent: {
    position: 'relative',
    clear: 'all',
    marginTop: '5vh',
    width: '80vw',
    margin: 'auto',
  },
});

const DisplayWriteups = () => {
  const classes = useStyles();

  return (
    <div className={ classes.base }>
      <div className={ classes.mainContent }>
        <h1>Writeups</h1>
        <p>&nbsp;</p>
        <p>During my experience in HackTheBox and TryHackMe I've been able to get lot of experience and knowledge regarding the cybersecurity domain; I hope that my writeups can be of help to learn something as well.</p>
        <p>&nbsp;</p>
        <Writeups />
      </div>
    </div>
  )
};

export default DisplayWriteups;
