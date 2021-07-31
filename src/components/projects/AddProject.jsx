import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { addProject, updateProject } from "../../store/actions/projectActions";

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
  submitButton: {
    marginLeft: "20px",
  },
});

const AddProject = ({ project, setProject }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [project, setProject] = useState({
  //   name: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (project._id) {
      const id = project._id;

      const updatedProject = {
        name: project.name,
        date: project.date,
        author: "Riccardo",
      };

      dispatch(updateProject(updatedProject, id));
    } else {
      const newProject = {
        ...project,
        date: new Date(),
      };

      dispatch(addProject(newProject));
    }

    setProject({
      name: "",
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
        <TextField
          id="enter-project"
          variant="outlined"
          label="enterProject"
          autoFocus
          fullWidth
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />
        <Button
          className={classes.submitButton}
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

export default AddProject;

