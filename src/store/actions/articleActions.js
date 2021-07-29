import axios from "axios";
import { url, setHeaders } from "../../api/index";
import { toast } from "react-toastify";

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}/articles`, setHeaders())
      .then((articles) => {
        dispatch({
          type: "GET_ARTICLES",
          articles,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addTodo = (article) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;

    axios
      .post(`${url}/articles`, { ...article, author, uid }, setHeaders())
      .then((article) => {
        dispatch({
          type: "ADD_ARTICLE",
          article,
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
      .put(`${url}/articles/${id}`, updatedTodo, setHeaders())
      .then((article) => {
        dispatch({
          type: "UPDATE_ARTICLE",
          article,
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
      .patch(`${url}/articles/${id}`, {}, setHeaders())
      .then((article) => {
        dispatch({
          type: "CHECK_ARTICLE",
          article,
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
      .delete(`${url}/articles/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_ARTICLE",
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
