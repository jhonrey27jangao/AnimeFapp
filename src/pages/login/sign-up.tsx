import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  StyledSignIn,
  StyledLinkContainer,
  StyledInputContainer,
  StyledButtonContainer,
  StyledErrorMessage,
  StyledShowPassword,
  StyledLoginContainer,
  StyledLogo,
} from "./styles";
import { signUp } from "../../ducks/login/actions";

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const signUpState = useSelector((state: any) => state.login);
  const signUpErrors = signUpState.errors.signUp;
  const history = useHistory();
  const [showPass, setShowPass] = useState(false);

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    emailOrNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    middleName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    emailOrNumber: Yup.string()
      .required("This field is required")
      .email("This field must be email"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain latin letters."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain letters.")
      .required("This field is required"),
  });

  const formikInput = ({ field, props, type, placeholder, id }: any) => (
    <input
      type={type}
      {...field}
      {...props}
      id={id}
      placeholder={placeholder}
    />
  );

  const dispatchSignUp = ({ values }: any) => {
    console.log(values, "values");
    const data = {
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      emailOrNumber: values.emailOrNumber,
      password: values.password,
    };
    dispatch(signUp(data));
  };

  useEffect(() => {
    console.log(signUpState);
    console.log(signUpErrors);
    console.log("Rendering Sign-Up Component");
    if (signUpErrors === undefined) {
      setTimeout(() => {
        history.push("/sign-in");
      }, 1000);
    } else {
    }
  }, [signUpState, signUpErrors, history]);

  return (
    <StyledLoginContainer>
      <StyledLogo>
        AnimeFap
        <img
          src={require("../../assets/images/palmtop-tiger.png")}
          alt="Logo"
        />
      </StyledLogo>
      <StyledSignIn>
        <StyledLinkContainer>
          <ul>
            <li>
              <Link to="/sign-in/">SIGN-IN</Link>
            </li>
            <li>
              <Link to="/sign-up/" className="active">
                SIGN-UP
              </Link>
            </li>
          </ul>
        </StyledLinkContainer>
        <Formik
          initialValues={initialValues}
          validateOnBlur={true}
          validationSchema={validationSchema}
          onSubmit={(values) => dispatchSignUp({ values })}
          enableReinitialize={true}
        >
          {(formikBag: any) => (
            <Form onSubmit={formikBag.handleSubmit}>
              <StyledInputContainer>
                <StyledErrorMessage>
                  <ErrorMessage name="firstName" />
                </StyledErrorMessage>
                <Field
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  component={formikInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="middleName" />
                </StyledErrorMessage>
                <Field
                  type="text"
                  placeholder="Middle Name"
                  name="middleName"
                  component={formikInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="lastName" />
                </StyledErrorMessage>
                <Field
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  component={formikInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="emailOrNumber" />
                </StyledErrorMessage>
                <Field
                  type="email"
                  placeholder="Email or Number"
                  name="emailOrNumber"
                  component={formikInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="password" />
                </StyledErrorMessage>
                <Field
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  component={formikInput}
                />
                <StyledErrorMessage>
                  <ErrorMessage name="confirmPassword" />
                </StyledErrorMessage>
                <Field
                  type={showPass ? "text" : "password"}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  component={formikInput}
                />
                <StyledShowPassword>
                  <input
                    type="checkbox"
                    onChange={(e) => setShowPass(e.target.checked)}
                  />
                  <label>Show Password</label>
                </StyledShowPassword>
              </StyledInputContainer>
              <StyledErrorMessage>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  {signUpErrors}
                </div>
              </StyledErrorMessage>
              <StyledButtonContainer type="submit">
                SIGN-UP
              </StyledButtonContainer>
            </Form>
          )}
        </Formik>
      </StyledSignIn>
    </StyledLoginContainer>
  );
};
