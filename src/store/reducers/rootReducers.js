import { combineReducers } from "redux";
import mediaReducer from "./mediaReducers";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  medias: mediaReducer,
  articles: articleReducer,
  projects: projectReducer,
  auth: authReducer,
});

export default rootReducer;
