import * as types from "./types";
import uuid from "uuid/v4";
import { initialState } from "../state";

export const loginReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.SIGN_IN:
      const setAuth = state.accounts.filter(
        (account: any) => account.emailOrNumber === action.emailOrNumber
      );
      if (setAuth.length !== 0 && setAuth[0].password === action.password) {
        setAuth[0].isLogged = true;
        // delete setAuth[0].password;
        state = {
          ...state,
          errors: [],
        };
        localStorage.setItem("Auth", JSON.stringify(setAuth));
        localStorage.setItem("SocialMediaState", JSON.stringify(state));
      } else {
        state = {
          ...state,
          errors: {
            signIn: "Incorrect username and password",
          },
        };
      }
      return state;
    case types.SIGN_OUT:
      const destroyAuth = state.accounts.filter(
        (account: any) => account.userId === action.userId
      );
      destroyAuth[0].isLogged = false;
      state = {
        ...state,
        errors: {
          ...state.errors,
          signUp: "",
        },
      };
      localStorage.removeItem("Auth");
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    case types.SIGN_UP:
      console.log(action);
      const checkEmail = state.accounts.filter(
        (account: any) => account.emailOrNumber === action.emailOrNumber
      );

      if (checkEmail.length === 0) {
        state = {
          ...state,
          accounts: [
            ...state.accounts,
            {
              userId: uuid(),
              isLogged: false,
              emailOrNumber: action.emailOrNumber,
              password: action.password,
              firstName: action.firstName,
              middleName: action.middleName,
              lastName: action.lastName,
              description: "No description",
              address: "No Address",
              profileImg: "",
              followers: [],
              following: [],
            },
          ],
          errors: {},
        };
      } else {
        state = {
          ...state,
          errors: {
            signUp: "Email is already exists",
          },
        };
      }
      localStorage.setItem("SocialMediaState", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
