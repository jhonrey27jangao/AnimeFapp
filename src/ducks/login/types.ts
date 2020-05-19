export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

export type SigInRequestProps = {
  emailOrNumber: string;
  password: string;
};

export type SignOutProps = {
  userId: number;
};

export type SignUpProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  emailOrNumber: string;
  password: string;
};
