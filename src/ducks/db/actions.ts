import * as types from "./types";

export const getDbRequest = () => {
  return {
    type: types.GET_DB_REQUEST,
  };
};

export const getDbSuccess = (data: any) => {
  return {
    type: types.GET_DB_SUCCESS,
    payload: data,
  };
};

export const getDbFailure = (error: any) => {
  return {
    type: types.GET_DB_FAILURE,
    payload: error,
  };
};
