import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';

import Writeup from './Writeup';
import { getWriteups } from '../../store/actions/writeupActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    color: '#000!important',
    marginTop: '1.7em',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    padding: "20px",
  },
  title: {
    // color: theme.palette.primary.dark,
    color: '#000!important',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const ListWriteups = ({ setWriteup }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const writeups = useSelector((state) => state.writeups);

  var length = 0;

  if (!writeups) {
    length = 0
  } else {
    length = writeups.length
  }

  // Use Effect will be called when our components renders
  useEffect(() => {
    dispatch(getWriteups());
  }, [dispatch]); // this is to avoid it making continually rendering

  return (
    <div className={classes.root}>
    {length > 0 ? (
      <ImageList className={classes.imageList} cols={2.5}>
        {writeups &&
          writeups.map((writeup) => {
            return (
              <Writeup
                writeup={writeup}
                key={writeup._id}
                setWriteup={setWriteup}
              />
            );
          })}
      </ImageList>
      ) : ""}
    </div>
  );
};

export default ListWriteups;
