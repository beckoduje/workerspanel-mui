import { useSelector, useDispatch } from "react-redux";

import { isLoggedInActions } from "../../store/isLoggedIn-slice";

import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Box, Typography, Button, styled } from "@mui/material";

// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LogInTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  fontSize: "1.3rem",
  fontWeight: 600,
  marginBottom: "1rem",
  fontFamily: "Open Sans, sans-serif",
}));

const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "0.3rem",
  height: "6.3rem",
  fontFamily: "Open Sans, sans-serif",
}));

const LabelField = styled("label")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  marginBottom: "0.5rem",
  fontFamily: "Open Sans, sans-serif",
}));

const InputField = styled(Field)(({ theme, error: any }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  marginBottom: "0.6rem",
  // marginBottom: error ? "5rem" : "0.6rem", ne radi ovako, probat skuzit kasnije kako
  fontFamily: "Open Sans, sans-serif",
  padding: "0.65rem",
  boxShadow: theme.palette.boxShadow.secondary,
  border: "none",
  borderTop: "1px solid rgba(0,0,0,0.04)",
  outline: "none",
  borderRadius: "3px",
}));

const CustomErrorMessage = styled(ErrorMessage)(({ theme }) => ({
  fontSize: "0.8rem",
  color: theme.palette.text.inputError,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.text.action,
  marginTop: "1rem",
  padding: "0.65rem",
  boxShadow: theme.palette.boxShadow.secondary,
  textTransform: "uppercase",
  color: theme.palette.background.default,
  fontSize: "1rem",
  fontWeight: 700,
  fontFamily: "Open Sans, sans-serif",
  cursor: "pointer",
  borderTop: "1px solid rgba(0,0,0,0.04)",
  "& > span": {
    display: "none",
  },
}));

const LogInForm = () => {
  const dispatch = useDispatch();
  const navitage = useNavigate();

  const handleLogin = (auth: any, email: any, password: any, bag: any) => {
    // e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user && dispatch(isLoggedInActions.logUserIn());
        navitage("/");
      })
      .catch((error) => {
        // setError(true);
        // ili
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        bag.setErrors(error);
      })
      .finally(() => {
        console.log(bag);
      });
  };
  return (
    <Box sx={{ width: "30rem", display: "flex", flexDirection: "column" }}>
      <LogInTitle variant="h6">Log In</LogInTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("No password provided."),
        })}
        onSubmit={(values, bag) => {
          const { email, password } = values;
          handleLogin(auth, email, password, bag);
        }}
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <InputWrapper>
                <LabelField htmlFor="email">Email:</LabelField>
                <InputField
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  error={errors.email}
                />
                <CustomErrorMessage name="email" component="div" />
              </InputWrapper>
              <InputWrapper>
                <LabelField htmlFor="password">Password:</LabelField>
                <InputField
                  type="password"
                  name="password"
                  placeholder="***"
                  error={errors.password}
                />
                <CustomErrorMessage name="password" component="div" />
              </InputWrapper>
              <SubmitButton type="submit" variant="text">
                Log In
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LogInForm;
