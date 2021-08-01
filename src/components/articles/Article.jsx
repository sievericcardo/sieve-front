import React, { useEffect } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { url } from '../../api/index';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: '#000!important',
    backgroundColor: '#262626'
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
}));

const  Article = ({ article, setArticle }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const renderImage = async() => {
  //   axios.get(`${url}/articles/image?path=${article.image}`)
  //     .then(response => {
  //       return response.data
  //       // setImage({
  //       //       image: response.data
  //       // });
  //     })
    //   .catch(err => console.log(err));
    // try {
    //   const res = await axios.get(`${url}/articles/image?path=${article.image}`);
    //   const image = res.data;
  
    //   // this will re render the view with new data
    //   setImage({
    //     image: image
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  // }

  const renderImage = async() => {
    const value = encodeURIComponent(article.image);
    const response = await fetch(`${url}/articles/image?path=${value}`, {
      method: 'GET'
    });

    console.log(response);

    const jsonData = await response.json();

    console.info(jsonData);
    setImage(jsonData.data)
  }

  useEffect(() => {
    renderImage()
    console.log(image);
  });

  return (
    <Card className={classes.root}>
      <CardHeader className={ classes.text }
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ article.name }
        subheader={ article.date }
      />
      <CardMedia
        className={classes.media}
        image={ image }
        title={ article.name }
      />
      {/* { axios.get(`${url}/articles/image`, {image: article.image,}).then(response => (
        <CardMedia
          className={classes.media}
          image={ response.data }
          title={ article.name }
        />
      ))} */}
      <CardContent className={ classes.text }>
        <Typography variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={ classes.text }>
          <Typography paragraph>{ article.body }</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Article;