import * as types from "./actionTypes";

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course: course}; // <- This, is the same as this (below)
    // return { type: "CREATE_COURSE", course } // because the right matches the left side
}