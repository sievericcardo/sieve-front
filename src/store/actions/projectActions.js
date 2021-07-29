import axios from "axios";
import { url, setHeaders } from "../../api/index";
import { toast } from "react-toastify";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}/projects`, setHeaders())
      .then((projects) => {
        dispatch({
          type: "GET_PROJECTS",
          projects,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (project) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;

    axios
      .post(`${url}/projects`, { ...project, author, uid }, setHeaders())
      .then((project) => {
        dispatch({
          type: "ADD_PROJECT",
          project,
        });
      })
      .catch((error) => {
        console.log(error.response);

        // optional change; it displays only if we can
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const updateTodo = (updatedTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/projects/${id}`, updatedTodo, setHeaders())
      .then((project) => {
        dispatch({
          type: "UPDATE_PROJECT",
          project,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const checkTodo = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/projects/${id}`, {}, setHeaders())
      .then((project) => {
        dispatch({
          type: "CHECK_PROJECT",
          project,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/projects/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_PROJECT",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
