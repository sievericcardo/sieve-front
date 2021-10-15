import logo from "../../assets/img/base-img/sieve-logo-dark.webp";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"; // for custom css

import { Link, useHistory } from "react-router-dom";

import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
    margin: "5px",
    padding: "5px",
  },
  authButton: {
    //
  },
  logo: {
    width: '30px',
    marginRight: '20px'
  },
  title: {
    fontFamily: "WindSong"
  },
  navbar: {
    zIndex: 9999
  },
});

const Navbar = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);

  console.log(state);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // logout
    dispatch(signOut());

    history.push("/signin");
  };

  return (
    <div>
      <AppBar position="static" color="primary" className={ classes.navbar }>
        <Toolbar>
          <img src={logo} className={classes.logo} alt="Logo" />
          <Typography variant="h4" className={classes.root}>
            <Link className={ classes.linkStyle } to="/">
              <span className={ classes.title }>Sieve</span>
            </Link>
            <Button color="inherit">
            <Link className={classes.linkStyle} to="/writeups">
              Writeups
            </Link>
          </Button>
          </Typography>
          {auth._id ? (
            <>
              <Typography variant="subtitle2" className={classes.root}>
                Logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link className={classes.linkStyle} to="/signin">
                  Sign In
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

