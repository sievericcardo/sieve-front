import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  bannerContainer: {
    width: '100vw',
    height: 'auto',
    position: 'relative',
    padding: 0,
    margin: 0,
    left: 0,
    top: 0,
    zIndex: -1,
  },
  banner: {
    width: '100vw',
    height: 'auto',
    objectFit: 'cover'
  },
});

const Banner = (childData) => {
  const classes = useStyles();

  return (
    <div className={ classes.bannerContainer }>
      <img src={ childData.childToParent[0] } className={ classes.banner } alt={ childData.childToParent[1] } />
    </div>
  );
};

export default Banner;
