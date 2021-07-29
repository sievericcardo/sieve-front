import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { addArticle, updateArticle } from "../../store/actions/articleActions";

const useStyles = makeStyles({
  formStyle: {
    maxWidth: "70vw",
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    display: "flex",
    justifyContent: "space-between",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddArticle = ({ article, setArticle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [article, setArticle] = useState({
  //   name: "",
  //   isComplete: false,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (article._id) {
      const id = article._id;

      const updatedArticle = {
        name: article.name,
        isComplete: article.isComplete,
        date: article.date,
        author: "Riccardo",
      };

      dispatch(updateArticle(updatedArticle, id));
    } else {
      const newTodo = {
        ...article,
        date: new Date(),
      };

      dispatch(addArticle(newTodo));
    }

    setArticle({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit()}
      >
        <TextField
          id="enter-article"
          variant="outlined"
          label="enterArticle"
          autoFocus
          fullWidth
          value={article.name}
          onChange={(e) => setArticle({ ...article, name: e.target.value })}
        />
        <Button
          className={classes.submitButton}
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

