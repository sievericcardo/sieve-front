import logo from '../../assets/img/base-img/sieve-logo-dark.webp';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

// Import element from the icons
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    width: '30px',
    marginRight: '20px'
  },
  notification: {
    right: '10px',
    top: '0px',
    position: 'absolute'
  },
  pageTitle: {
    fontFamily: 'WindSong',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  if (auth === null) {
    return <Redirect to="/" />;
  }

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={ clsx(classes.appBar, open && classes.appBarShift) }
      >
        <Toolbar className={ classes.toolbar }>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={ handleDrawerOpen }
            className={ clsx(classes.menuButton, open && classes.menuButtonHidden) }
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className={ classes.logo } alt="Logo dashboard" />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={ classes.pageTitle }
          >
            <span className={ classes.title }>Sieve Dashboard</span>
            <IconButton color="inherit" className={ classes.notification }>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Dashboard;
