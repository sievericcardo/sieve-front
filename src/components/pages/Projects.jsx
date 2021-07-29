import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    height: '600px',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  }
});

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={ classes.flexContainer }></div>
  );
}

export default Projects;
