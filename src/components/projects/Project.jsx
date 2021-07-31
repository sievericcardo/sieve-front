import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AllInclusive } from '@material-ui/icons';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  projects: {
    color: '#000'
  }
});

const  Project = ({ project, setProject }) => {
  const classes = useStyles();

  return (
    <div className={ classes.projects }>
      <Typography variant="h4"><AllInclusive /> {project.name}</Typography>
      <Typography variant="body2">
        {project.body}
      </Typography>
    </div>
  );
}

export default Project;
