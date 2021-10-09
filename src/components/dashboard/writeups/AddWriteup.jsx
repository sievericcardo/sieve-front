import React from "react";
import { useDispatch } from "react-redux";

import { TextField, MenuItem, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { addWriteup, updateWriteup } from "../../../store/actions/writeupActions";

const useStyles = makeStyles({
  formStyle: {
    maxWidth: "70vw",
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  marginBlocks: {
    marginBottom: "20px",
  },
  textArea: {
    width: "25vw",
    height: "15vh",
  },
  submitButton: {
    marginLeft: "20px",
  },
});

const AddWriteup = ({ writeup, setWriteup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (writeup._id) {
      const id = writeup._id;

      const updatedWriteup = {
        name: writeup.name,
        body: btoa(unescape(encodeURIComponent(writeup.body))),
        date: writeup.date,
        author: "Riccardo",
      };

      dispatch(updateWriteup(updatedWriteup, id));
    } else {
      writeup.body = btoa(unescape(encodeURIComponent(writeup.body)));

      const newWriteup = {
        ...writeup,
        date: new Date(),
      };

      dispatch(addWriteup(newWriteup));
    }

    setWriteup({
      name: "",
      body: "",
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={ handleSubmit }
      >
        <div>
          <TextField
            required
            className={ classes.marginBlocks }
            id="enter-writeup"
            variant="outlined"
            label="Writeup title"
            autoFocus
            fullWidth
            value={writeup.name}
            onChange={(e) => setWriteup({ ...writeup, name: e.target.value })}
          />
          <TextField
            required
            className={ classes.marginBlocks }
            id="platform-writeup"
            select
            label="Select platform"
            value={writeup.plaform}
            onChange={(e) => setWriteup({ ...writeup, platform: e.target.value })}
            helperText="Please select the plaform"
            variant="standard"
          >
            <MenuItem key="htb" value="htb">
              Hack the box
            </MenuItem>
            <MenuItem key="thm" value="thm">
              Try Hack Me
            </MenuItem>
          </TextField>
        </div>
        <div>
          <TextField 
            required
            className={ classes.textArea }
            id="writeup-body"
            aria-label="minimum height"
            minRows={1}
            multiline
            label="Writeup body"
            variant="outlined"
            fullWidth
            value={writeup.body}
            onChange={(e) => setWriteup({ ...writeup, body: e.target.value })}
          />
        </div>
        <div>
          <Button
            className={classes.submitButton}
            color="primary"
            variant="contained"
            type="submit"
          >
            <Send />
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddWriteup;

