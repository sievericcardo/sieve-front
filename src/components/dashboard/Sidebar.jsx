import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { mainListItems, secondaryListItems } from './listItems';

import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  sideBar: {
    maxWidth: '20vw',
    position: 'absolute',
    left: 0,
    height: '100vh',
    backgroundColor: '#fff'
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={ classes.sideBar }>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={ open }
      >
        <div className={ classes.toolbarIcon }>
          <IconButton onClick={ handleDrawerClose }>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{ mainListItems}</List>
        <Divider />
        <List>{ secondaryListItems}</List>
      </Drawer>
    </div>
  )
}

export default Sidebar;
