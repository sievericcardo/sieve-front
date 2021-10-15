import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import moment from "moment";

import { checkWriteup, deleteWriteup } from "../../../store/actions/writeupActions";

const useStyles = makeStyles({
  writeupStyles: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
    color: "#000"
  },
  greyStyle: {
    color: "#010!important",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Writeup = ({ writeup, setWriteup, writeups }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = (id) => {
    const foundWriteup = writeups.find((writeup) => writeup._id === id);
    // foundWriteup.body = decodeURIComponent(escape(atob(foundWriteup.body)));
    // foundWriteup.body = atob(foundWriteup.body);
    foundWriteup.body = decodeURIComponent(escape(foundWriteup.body));

    setWriteup({ ...foundWriteup });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkWriteup(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteWriteup(id));
  };

  return (
    <>
      <div className={classes.writeupStyles}>
        <div>
          <Typography variant="subtitle1">{writeup.name}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {writeup.platform}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(writeup.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(writeup._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick(writeup._id)}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(writeup._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Writeup;

