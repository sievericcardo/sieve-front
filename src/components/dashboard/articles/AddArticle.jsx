import React from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { addArticle, updateArticle } from "../../../store/actions/articleActions";

const useStyles = makeStyles({
  formStyle: {
    maxWidth: "70vw",
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#fff'
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddArticle = ({ article, setArticle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (article._id) {
      const id = article._id;

      const updatedArticle = {
        name: article.name,
        body: article.body,
        date: article.date,
        author: "Riccardo",
      };

      dispatch(updateArticle(updatedArticle, id));
    } else {
      const newArticle = {
        ...article,
        date: new Date(),
      };

      dispatch(addArticle(newArticle));
    }

    setArticle({
      name: "",
      body: "",
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={ classes.formStyle }
        onSubmit={ handleSubmit }
      >
        <TextField
          id="enter-article"
          variant="outlined"
          label="Article title"
          autoFocus
          fullWidth
          value={article.name}
          onChange={(e) => setArticle({ ...article, name: e.target.value })}
        />
        <TextField 
          id="article-body"
          aria-label="minimum height"
          minRows={1}
          label="Article body"
          variant="outlined"
          fullWidth
          value={article.body}
          onChange={(e) => setArticle({ ...article, body: e.target.value })}
        />
        <Button
          className={ classes.submitButton }
          color="primary"
          variant="contained"
          type="submit"
        >
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddArticle;

