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
        <Writeups />
      </div>
    </div>
  )
};

export default DisplayWriteups;
