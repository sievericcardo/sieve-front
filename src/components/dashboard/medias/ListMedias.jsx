import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Media from "./Media";
import { getMedias } from "../../../store/actions/mediaActions";

const useStyles = makeStyles({
  mediaStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000",
    backgroundColor: '#fff',
    color: '#000',
    marginTop: '0.2em',
  },
});

const ListMedias = ({ setMedia }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.medias);

  var length = 0;

  if (!medias) {
    length = 0
  } else {
    length = medias.length
  }

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getMedias());
  }, [dispatch]); // this is to avoid it making continually rendering

  return (
    <>
      <div className={classes.mediaStyle}>
        <Typography variant="h5">
          {length > 0 ? "My medias" : "No media yet"}
        </Typography>
        {medias &&
          medias.map((media) => {
            return (
              <Media
                media={media}
                key={media._id}
                setMedia={setMedia}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListMedias;
