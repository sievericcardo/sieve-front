import React from 'react';

import { Link } from 'react-router-dom';

// Import element from the core
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

// Import icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

// Add icons for data in dashboard
import Book from '@material-ui/icons/Book';
import AccountTree from '@material-ui/icons/AccountTree';

export const mainListItems = (
  <div>
    <Link className="linkStyle" to='/cms-dashboard'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-articles'>
      <ListItem button>
        <ListItemIcon>
         <Book />
        </ListItemIcon>
        <ListItemText primary="Articles" />
      </ListItem>
    </Link>
    <Link className="linkStyle" to='/cms-dashboard/manage-projects'>
      <ListItem button>
        <ListItemIcon>
          <AccountTree />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
