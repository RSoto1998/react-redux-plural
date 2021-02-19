import * as types from "./actionTypes";

export function beginApiCall() {
  // console("trying to begin api call");
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}
