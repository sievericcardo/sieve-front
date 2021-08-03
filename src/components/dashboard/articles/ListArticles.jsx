import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Article from "./Article";
import { getArticles } from "../../../store/actions/articleActions";

const useStyles = makeStyles({
  articleStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: '#fff',
    color: '#000',
    marginTop: '0.2em',
  },
});

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
    <>
      <div className={classes.articleStyle}>
        <Typography variant="h5">
          {length > 0 ? "My articles" : "No article yet"}
        </Typography>
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
      </div>
    </>
  );
};

export default ListArticles;
