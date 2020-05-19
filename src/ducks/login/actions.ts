import * as types from "./types";

export const signIn = ({
  emailOrNumber,
  password,
}: types.SigInRequestProps) => {
  return {
    type: types.SIGN_IN,
    emailOrNumber: emailOrNumber,
    password: password,
  };
};

export const signOut = ({ userId }: types.SignOutProps) => {
  return {
    type: types.SIGN_OUT,
    userId: userId,
  };
};

export const signUp = ({
  firstName,
  middleName,
  lastName,
  emailOrNumber,
  password,
}: types.SignUpProps) => {
  return {
    type: types.SIGN_UP,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    emailOrNumber: emailOrNumber,
    password: password,
  };
};
