import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import moment from "moment";

import { checkProject, deleteProject } from "../../../store/actions/projectActions";

const useStyles = makeStyles({
  projectStyles: {
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
    color: "#212121!important",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Project = ({ project, setProject, projects }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateClick = (id) => {
    const foundTodo = projects.find((todo) => todo._id === id);
    setProject({ ...foundTodo });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkProject(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <>
      <div className={classes.projectStyles}>
        <div>
          <Typography variant="subtitle1">{project.name}</Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Text: {project.body}
          </Typography>
          <Typography variant="body2" className={classes.greyStyle}>
            Added: {moment(project.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck(project._id)}>
              <CheckCircle color="action" />
            </Button>
            <Button onClick={() => handleUpdateClick(project._id)}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(project._id)}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Project;

