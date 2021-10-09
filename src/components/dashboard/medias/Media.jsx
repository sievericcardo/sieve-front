import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import moment from "moment";

import { checkMedia, deleteMedia } from "../../../store/actions/mediaActions";

const useStyles = makeStyles({
  mediaStyles: {
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

const Media = ({ media, setMedia }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    setMedia(media); // Using the media passed as prop from the list to do

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkMedia(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteMedia(id));
  };

  return (
    <>
      <div className={classes.mediaStyles}>
        <div>
          <Typography variant="h4">{media.image}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {media.altText}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(media.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(media._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(media._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Media;
