import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: "#c6c6c6",
    color: "#000",
  },
  spacing: {
    marginTop: "20px",
  },
  formTitle: {
      color: "#000"
  }
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [creds, setCreds] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(creds));
    setCreds({
      name: "",
      password: "",
    });
  };

  if (auth._id) {
    return <Redirect to="/cms-dashboard" />;
  }

  return (
    <div className="formContent">
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" className={ classes.formTitle }>Sign in</Typography>
        <TextField
          className={classes.spacing}
          id="name"
          label="Nickname"
          variant="outlined"
          fullWidth
          value={creds.name}
          onChange={(e) => setCreds({ ...creds, name: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;

