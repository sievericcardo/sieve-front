import { toast } from "react-toastify";

const mediaReducer = (medias = [], action) => {
    switch(action.type) {
        case "GET_MEDIAS":
            return action.medias.data
        case "ADD_MEDIA":
            toast.success("A media was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.media.data, ...medias]
        case "UPDATE_MEDIA":
            toast.success("The media was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each media, and check if it is updated
            return medias.map((media) => media._id === action.media.data._id ? action.media.data : media);
        case "CHECK_MEDIA":
            toast.success("The media was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each media, and check if it is updated
            return medias.map((media) => media._id === action.media.data._id ? action.media.data : media);
        case "DELETE_MEDIA":
            toast.success("The media was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each media, and check if it is updated
            return medias.filter((media) => media._id !== action.id);
        default:
            return medias
    }
};

export default mediaReducer;
