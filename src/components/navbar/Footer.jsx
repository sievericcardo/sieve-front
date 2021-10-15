import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    position: 'relative',
    width: '100vw',
    backgroundColor: '#161616',
    color: '#fff!important',
    margin: '50px 0 0 0',
    padding: '0px 20px 30px 0',
  },
})

const Copyright = () => {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {'Copyright @'}
      <Link color="inherit" href="/">Sieve</Link>{' '}
      { new Date().getFullYear() }
      {'.'}
    </Typography>
  )
}

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={ classes.footer }>
      <Box pt={4}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Footer;
