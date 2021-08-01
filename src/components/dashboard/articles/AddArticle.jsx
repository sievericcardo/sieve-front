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
  imageUpload: {
    color: '#4d3f5a',
    padding: '10px',
    margin: '10px'
  }
});

const AddArticle = ({ article, setArticle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

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
      var file = article.image;

      getBase64(file).then (
        data => {
          const newArticle = {
            ...article,
            image: data,
            date: new Date(),
          };
    
          dispatch(addArticle(newArticle));
        }
      );
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
        encType='multipart/form-data'
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
        <input
          type="file"
          id="uploading"
          name="uploading"
          accept="image/webp"
          className={ classes.imageUpload }
          onChange={(e) => setArticle({ ...article, image: e.target.files[0] })}
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

