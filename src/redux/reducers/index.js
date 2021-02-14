import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses: courses, // <- This, is the same as this (below)
  //courses
  authors,
});

export default rootReducer;
