import * as types from "./types";
import { initialState } from "../state";

export const getDbReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DB_REQUEST:
      state = {
        ...state,
      };
      console.log("Getting DB");
      return state;
    case types.GET_DB_SUCCESS:
      state = {
        ...state,
        accounts: [...action.payload],
      };
      console.log("DB SUCCESS", console.log(state));
      return state;
    case types.GET_DB_FAILURE:
      state = {
        ...state,
      };
      return state;
    default:
      return state;
  }
};
