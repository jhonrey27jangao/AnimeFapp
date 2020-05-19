import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  StyledLoginContainer,
  StyledLogo,
  StyledSignIn,
  StyledLinkContainer,
  StyledInputContainer,
  StyledButtonContainer,
  StyledShowPassword,
  StyledErrorMessage,
} from "./styles";
import { signIn } from "../../ducks/login/actions";

const SignInComponent: React.FC = () => {
  const dispatch = useDispatch();
  const signInState = useSelector((state: any) => state.login);
  const signInErrors = signInState.errors.signIn;
  const [showPass, setShowPass] = useState(false);
  const user = localStorage.getItem("Auth");

  const dispatchSignIn = (values: any, { resetForm }: any) => {
    dispatch(
      signIn({
        emailOrNumber: values.emailOrNumber,
        password: values.password,
      })
    );
    console.log("signing in");
    resetForm();
  };

  const initialValues = {
    emailOrNumber: "",
    password: "",
  };

  useEffect(() => {
    console.log("Rendering Sign-In Component");
    if (user !== null) {
      window.location.href = "/home";
    }
  }, [user]);

  const validationSchema = Yup.object({
    emailOrNumber: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
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
              <Link to="/sign-in" className="active">
                SIGN-IN
              </Link>
            </li>
            <li>
              <Link to="/sign-up">SIGN-UP</Link>
            </li>
          </ul>
        </StyledLinkContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) =>
            dispatchSignIn(values, { resetForm })
          }
        >
          {(formikBag) => (
            <>
              <Form
                onSubmit={formikBag.handleSubmit}
                onReset={formikBag.handleReset}
              >
                <StyledInputContainer>
                  <StyledErrorMessage>
                    <ErrorMessage name="emailOrNumber" />
                  </StyledErrorMessage>
                  <Field
                    type="text"
                    placeholder="Email or Mobile Number"
                    name="emailOrNumber"
                    component={formikInput}
                  />
                  <StyledErrorMessage>
                    <ErrorMessage name="password" />
                  </StyledErrorMessage>

                  <Field
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
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
                    {signInErrors}
                  </div>
                </StyledErrorMessage>
                <StyledButtonContainer type="submit">
                  LOGIN
                </StyledButtonContainer>
              </Form>
            </>
          )}
        </Formik>
        <StyledLinkContainer>
          <ul>
            <li>
              <a href="/forgot-password/" className="forgot-password">
                Forgot Password
              </a>
            </li>
          </ul>
        </StyledLinkContainer>
      </StyledSignIn>
    </StyledLoginContainer>
  );
};

export const SignIn = React.memo(SignInComponent);
