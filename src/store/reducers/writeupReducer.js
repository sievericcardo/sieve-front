import { toast } from "react-toastify";

const writeupReducer = (writeups = [], action) => {
    switch(action.type) {
        case "GET_WRITEUPS":
            console.info("Got the writeups")
            return action.writeups.data
        case "ADD_WRITEUP":
            toast.success("A writeup was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.writeup.data, ...writeups]
        case "UPDATE_WRITEUP":
            toast.success("The writeup was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each writeup, and check if it is updated
            return writeups.map((writeup) => writeup._id === action.writeup.data._id ? action.writeup.data : writeup);
        case "CHECK_WRITEUP":
            toast.success("The writeup was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each writeup, and check if it is updated
            return writeups.map((writeup) => writeup._id === action.writeup.data._id ? action.writeup.data : writeup);
        case "DELETE_WRITEUP":
            toast.success("The writeup was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each writeup, and check if it is updated
            return writeups.filter((writeup) => writeup._id !== action.id);
        default:
            return writeups
    }
};

export default writeupReducer;
