import { toast } from "react-toastify";

const articleReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_ARTICLE":
            toast.success("A article was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.article.data, ...state]
        case "GET_ARTICLES":
            return action.articles.data
        case "UPDATE_ARTICLE":
            toast.success("The article was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each article, and check if it is updated
            return state.map((article) => article._id === action.article.data._id ? action.article.data : article);
        case "CHECK_ARTICLE":
            toast.success("The article was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each article, and check if it is updated
            return state.map((article) => article._id === action.article.data._id ? action.article.data : article);
        case "DELETE_ARTICLE":
            toast.success("The article was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each article, and check if it is updated
            return state.filter((article) => article._id !== action.id);
        default:
            return state
    }
};

export default articleReducer;
