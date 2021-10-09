import { combineReducers } from "redux";
import mediaReducer from "./mediaReducers";
import articleReducer from "./articleReducer";
import projectReducer from "./projectReducer";
import writeupReducer from "./writeupReducer";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  medias: mediaReducer,
  articles: articleReducer,
  projects: projectReducer,
  writeups: writeupReducer,
  auth: authReducer,
});

export default rootReducer;
