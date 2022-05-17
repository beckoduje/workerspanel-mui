import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  Box,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  styled,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const LogInForm = () => {
  //   const [values, setValues] = React.useState<State>({
  //     amount: "",
  //     password: "",
  //     weight: "",
  //     weightRange: "",
  //     showPassword: false,
  //   });

  //   const handleChange =
  //     (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //       setValues({ ...values, [prop]: event.target.value });
  //     };

  //   const handleClickShowPassword = () => {
  //     setValues({
  //       ...values,
  //       showPassword: !values.showPassword,
  //     });
  //   };

  //   const handleMouseDownPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };

  //   const LogInTitle = styled(Typography)(({ theme }) => ({
  //     backgroundColor: theme.palette.background.default,
  //     color: theme.palette.text.primary,
  //     fontSize: "1.3rem",
  //     fontWeight: 600,
  //     marginBottom: "1rem",
  //     fontFamily: "Open Sans, sans-serif",
  //   }));

  //   const EmailInputField = styled(TextField)(({ theme }) => ({
  //     backgroundColor: theme.palette.background.default,
  //     color: theme.palette.text.primary,
  //     marginBottom: "1.3rem",
  //     fontFamily: "Open Sans, sans-serif",
  //     "& > label": {
  //       top: "0.5rem",
  //       left: "0.5rem",
  //     },
  //     "& > .css-9vakcx-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
  //       color: "rgba(104, 99, 99, 0.9)",
  //     },
  //     "& > div": {
  //       padding: "0.5rem",
  //       boxShadow: theme.palette.boxShadow.secondary,
  //     },
  //     "& > div::before": {
  //       border: "none",
  //     },
  //     "& > div::after": {
  //       border: "none",
  //     },
  //   }));

  //   const PasswordInputLabel = styled(InputLabel)(({ theme }) => ({
  //     top: "0.5rem",
  //     left: "0.5rem",
  //     "&.Mui-focused": {
  //       color: "rgba(104, 99, 99, 0.9)",
  //     },
  //   }));

  //   const PasswordInput = styled(Input)(({ theme }) => ({
  //     padding: "0.5rem",
  //     boxShadow: theme.palette.boxShadow.secondary,
  //     "&::before": {
  //       border: "none",
  //     },
  //     "&::after": {
  //       border: "none",
  //     },
  //   }));

  //   const SubmitButton = styled(Button)(({ theme }) => ({
  //     backgroundColor: theme.palette.background.default,
  //     marginTop: "1.3rem",
  //     padding: "0.5rem",
  //     boxShadow: theme.palette.boxShadow.secondary,
  //     textTransform: "uppercase",
  //     color: theme.palette.text.action,
  //     fontSize: "1rem",
  //     fontWeight: 700,
  //     fontFamily: "Open Sans, sans-serif",
  //     cursor: "pointer",
  //   }));

  //   return (
  //     <Box
  //       component="form"
  //       autoComplete="off"
  //       sx={{ width: "30rem", display: "flex", flexDirection: "column" }}
  //     >
  //       <LogInTitle variant="h6">Log In</LogInTitle>
  //       <EmailInputField id="email" label="Email" variant="standard" />
  //       <FormControl
  //         sx={{ marginBottom: "1.3rem", width: "100%" }}
  //         variant="standard"
  //       >
  //         <PasswordInputLabel htmlFor="standard-adornment-password">
  //           Password
  //         </PasswordInputLabel>
  //         <PasswordInput
  //           id="standard-adornment-password"
  //           type={values.showPassword ? "text" : "password"}
  //           value={values.password}
  //           onChange={handleChange("password")}
  //           endAdornment={
  //             <InputAdornment position="end">
  //               <IconButton
  //                 aria-label="toggle password visibility"
  //                 onClick={handleClickShowPassword}
  //                 onMouseDown={handleMouseDownPassword}
  //               >
  //                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
  //               </IconButton>
  //             </InputAdornment>
  //           }
  //         />
  //       </FormControl>
  //       <SubmitButton variant="text">Log In</SubmitButton>
  //     </Box>
  //   );
  // };
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
    backgroundColor: theme.palette.background.default,
    marginTop: "1rem",
    padding: "0.65rem",
    boxShadow: theme.palette.boxShadow.secondary,
    textTransform: "uppercase",
    color: theme.palette.text.action,
    fontSize: "1rem",
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
    cursor: "pointer",
    borderTop: "1px solid rgba(0,0,0,0.04)",
    "& > span": {
      display: "none",
    },
  }));

  return (
    <Box sx={{ width: "30rem", display: "flex", flexDirection: "column" }}>
      <LogInTitle variant="h6">Log In</LogInTitle>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
              <SubmitButton variant="text">Log In</SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LogInForm;
