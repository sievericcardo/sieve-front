import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import moment from "moment";

import { checkArticle, deleteArticle } from "../../store/actions/articleActions";

const useStyles = makeStyles({
  articleStyles: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
  },
  greyStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Article = ({ article, setArticle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setArticle(article); // Using the article passed as prop from the list to do

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkArticle(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <>
      <div className={classes.articleStyles}>
        <div>
          {article.isComplete ? (
            <Typography variant="subtitle1" className={classes.checked}>
              {article.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{article.name}</Typography>
          )}
          <Typography variant="body2" className={classes.greyStyle}>
            Author: {article.author}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(article.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(article._id)}>
              {article.isComplete ? (
                <CheckCircle color="action" className={classes.isComplete} />
              ) : (
                <CheckCircle color="action" />
              )}
            </Button>

            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(article._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Article;
