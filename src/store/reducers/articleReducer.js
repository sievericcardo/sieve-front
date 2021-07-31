import { toast } from "react-toastify";

const articleReducer = (articles = [], action) => {
    switch(action.type) {
        case "GET_ARTICLES":
            return action.articles.data
        case "ADD_ARTICLE":
            toast.success("A article was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.article.data, ...articles]
        case "UPDATE_ARTICLE":
            toast.success("The article was update", {
                position: toast.POSITION.BOTTOM_RIGHT
            });

            // We have an array; we map it for each article, and check if it is updated
            return articles.map((article) => article._id === action.article.data._id ? action.article.data : article);
        case "CHECK_ARTICLE":
            toast.success("The article was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each article, and check if it is updated
            return articles.map((article) => article._id === action.article.data._id ? action.article.data : article);
        case "DELETE_ARTICLE":
            toast.success("The article was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            
            // We have an array; we map it for each article, and check if it is updated
            return articles.filter((article) => article._id !== action.id);
        default:
            return articles
    }
};

export default articleReducer;
