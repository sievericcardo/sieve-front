import { toast } from "react-toastify";

const projectReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_PROJECT":
            toast.success("A project was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.project.data, ...state]
        case "GET_PROJECTS":
            return action.projects.data
        case "UPDATE_PROJECT":
            toast.success("The project was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each project, and check if it is updated
            return state.map((project) => project._id === action.project.data._id ? action.project.data : project);
        case "CHECK_PROJECT":
            toast.success("The project was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each project, and check if it is updated
            return state.map((project) => project._id === action.project.data._id ? action.project.data : project);
        case "DELETE_PROJECT":
            toast.success("The project was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each project, and check if it is updated
            return state.filter((project) => project._id !== action.id);
        default:
            return state
    }
};

export default projectReducer;
