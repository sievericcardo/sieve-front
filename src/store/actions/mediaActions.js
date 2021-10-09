import axios from "axios";
import { url, setHeaders } from "../../api/index";
import { toast } from "react-toastify";

export const getMedias = () => {
  return (dispatch) => {
    axios
      .get(`${url}/medias`, setHeaders())
      .then((medias) => {
        dispatch({
          type: "GET_MEDIAS",
          medias,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const addMedia = (media) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;

    axios
      .post(`${url}/medias`, { ...media, author, uid }, setHeaders())
      .then((media) => {
        dispatch({
          type: "ADD_MEDIA",
          media,
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

export const updateMedia = (updatedMedia, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/medias/${id}`, updatedMedia, setHeaders())
      .then((media) => {
        dispatch({
          type: "UPDATE_MEDIA",
          media,
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

export const checkMedia = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/medias/${id}`, {}, setHeaders())
      .then((media) => {
        dispatch({
          type: "CHECK_MEDIA",
          media,
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

export const deleteMedia = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/medias/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_MEDIA",
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
