import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
// import { Button, CardActionArea, CardActions } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

import { Link } from "react-router-dom";

// import moment from "moment";

import { url } from '../../api/index';

const useStyles = makeStyles((theme) => ({
  mainClass: {
    backgroundColor: "#99ccff",
    padding: "20px",
  },
  cardContent: {
    padding: "10px",
  },
  root: {
    maxWidth: 345,
    color: '#000!important',
    backgroundColor: '#726DA8',
    margin: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    color: '#fff!important',
  },
  linkStyle: {
    color: "#fcfcfc",
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
  },
  plat: {
    padding: "8px",
    textAlign: "center",
  }
}));

const Writeup = ({ writeup, setWriteup }) => {
  const classes = useStyles();

  const imageUrl = `${url}/writeups/image?path=${writeup.image}`;
  const link = `/writeups/${writeup._id}`;

  return (
    <Card className={classes.mainClass} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link className={classes.linkStyle} to={ link }>
          <CardMedia
            component="img"
            height="140"
            className={classes.media}
            image={ imageUrl }
            title={ writeup.name }
            alt={ writeup.name }
          />
        </Link>
        <CardContent className={classes.cardContent}>
          <Link className={classes.linkStyle} to={ link }>
            <Typography gutterBottom variant="h5" component="div">
              { writeup.name }
            </Typography>
          </Link>
          <Typography variant="h4" color="text.secondary" className={classes.plat}>
            { writeup.platform }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { writeup.body.substring(0, "50") }...
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default Writeup;
