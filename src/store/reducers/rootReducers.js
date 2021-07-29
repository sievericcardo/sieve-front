import { combineReducers } from "redux";
// import articleReducer from "./articleReducer";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
//   articles: articleReducer,
  auth: authReducer,
});

export default rootReducer;
