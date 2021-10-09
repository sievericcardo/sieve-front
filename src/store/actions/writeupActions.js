import axios from "axios";
import { url, setHeaders } from "../../api/index";
import { toast } from "react-toastify";

export const getWriteups = () => {
  return (dispatch) => {
    axios
      .get(`${url}/writeups`, setHeaders())
      .then((writeups) => {
        dispatch({
          type: "GET_WRITEUPS",
          writeups,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addWriteup = (writeup) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;

    axios
      .post(`${url}/writeups`, { ...writeup, author, uid }, setHeaders())
      .then((writeup) => {
        dispatch({
          type: "ADD_WRITEUP",
          writeup,
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

export const updateWriteup = (updatedWriteup, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/writeups/${id}`, updatedWriteup, setHeaders())
      .then((writeup) => {
        dispatch({
          type: "UPDATE_WRITEUP",
          writeup,
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

export const checkWriteup = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/writeups/${id}`, {}, setHeaders())
      .then((writeup) => {
        dispatch({
          type: "CHECK_WRITEUP",
          writeup,
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

export const deleteWriteup = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/writeups/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_WRITEUP",
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
