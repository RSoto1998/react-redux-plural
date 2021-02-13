import { combineReducers } from "redux";
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses // <- This, is the same as this (below)
    //courses
});

export default rootReducer;