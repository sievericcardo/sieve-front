import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';

import Article from './Article';
import { getArticles } from '../../store/actions/articleActions';

// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    color: '#000!important',
    marginTop: '1.7em',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    // color: theme.palette.primary.dark,
    color: '#000!important',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const ListArticles = ({ setArticle }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  var length = 0;

  if (!articles) {
    length = 0
  } else {
    length = articles.length
  }

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]); // this is to avoid it making continually rendering

  return (
    <div className={classes.root}>
    {length > 0 ? (
      <ImageList className={classes.imageList} cols={2.5}>
        {articles &&
          articles.map((article) => {
            return (
              <Article
                article={article}
                key={article._id}
                setArticle={setArticle}
              />
            );
          })}
      </ImageList>
      ) : ""}
    </div>
  );
}

export default ListArticles;
