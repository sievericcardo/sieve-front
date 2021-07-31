import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  articles: articleReducer,
  projects: projectReducer,
  auth: authReducer,
});

export default rootReducer;
