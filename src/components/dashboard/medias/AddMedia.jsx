import React from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { addMedia, updateMedia } from "../../../store/actions/mediaActions";

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

const AddMedia = ({ media, setMedia }) => {
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

    if (media._id) {
      const id = media._id;

      const updatedMedia = {
        altText: media.altText,
        date: media.date,
        author: "Riccardo",
      };

      dispatch(updateMedia(updatedMedia, id));
    } else {
      var file = media.image;

      getBase64(file).then (
        data => {
          const newMedia = {
            ...media,
            image: data,
            date: new Date(),
          };
    
          dispatch(addMedia(newMedia));
        }
      );
    }

    setMedia({
      alt: "",
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
          id="media-alt"
          aria-label="minimum height"
          minRows={1}
          label="Media alt"
          variant="outlined"
          fullWidth
          value={media.alt}
          onChange={(e) => setMedia({ ...media, altText: e.target.value })}
        />
        <input
          type="file"
          id="uploading"
          name="uploading"
          accept="image/webp"
          className={ classes.imageUpload }
          onChange={(e) => setMedia({ ...media, image: e.target.files[0] })}
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

export default AddMedia;

