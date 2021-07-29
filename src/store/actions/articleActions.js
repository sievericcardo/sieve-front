import axios from "axios";
import { url, setHeaders } from "../../api/index";
import { toast } from "react-toastify";

export const getArticles = () => {
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

export const addArticle = (article) => {
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

export const updateArticle = (updatedArticle, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/articles/${id}`, updatedArticle, setHeaders())
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

export const checkArticle = (id) => {
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

export const deleteArticle = (id) => {
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
