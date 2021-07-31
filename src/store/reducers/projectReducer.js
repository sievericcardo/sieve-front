import { toast } from "react-toastify";

const projectReducer = (projects = [], action) => {
    switch(action.type) {
        case "GET_PROJECTS":
            console.info("Got the projects")
            return action.projects.data
        case "ADD_PROJECT":
            toast.success("A project was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.project.data, ...projects]
        case "UPDATE_PROJECT":
            toast.success("The project was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each project, and check if it is updated
            return projects.map((project) => project._id === action.project.data._id ? action.project.data : project);
        case "CHECK_PROJECT":
            toast.success("The project was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each project, and check if it is updated
            return projects.map((project) => project._id === action.project.data._id ? action.project.data : project);
        case "DELETE_PROJECT":
            toast.success("The project was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each project, and check if it is updated
            return projects.filter((project) => project._id !== action.id);
        default:
            return projects
    }
};

export default projectReducer;
