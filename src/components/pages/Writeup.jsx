import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Single post component
import axios from "axios";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import { url } from '../../api/index';

const useStyles = makeStyles({
  mainContent: {
    width: "75vw",
    margin: "auto",
    paddingTop: "3em",
  },
});

const  Writeup = () => {
  const classes = useStyles();

  // Get ID from URL
  const { id } = useParams();
  const [writeup, setWriteup] = useState([]);

  useEffect(()=> {
      axios.get(`${url}/writeups/${id}`)
      .then(res => {
          console.log(res)
          setWriteup(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  }, [id]);

  return (
    <div className={classes.mainContent}>
      {/* <ReactMarkdown>{ decodeURIComponent(escape(atob(writeup.body))) }</ReactMarkdown> */}
      <ReactMarkdown>{ decodeURIComponent(escape(writeup.body)) }</ReactMarkdown>
    </div>
  );
};

export default Writeup;
