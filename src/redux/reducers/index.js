import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses, // <- This, is the same as this (below)
  //courses
  authors,
  apiCallsInProgress,
});

export default rootReducer;
