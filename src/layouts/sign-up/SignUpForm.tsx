import { Formik, Form, Field, ErrorMessage, useField } from "formik";

import * as Yup from "yup";

import { Box, Typography, Button, useTheme, styled } from "@mui/material";

// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

const MyCheckbox = ({ children, ...props }: any) => {
  const theme = useTheme();
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          marginBottom: "0.5rem",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "0.8rem",
        }}
      >
        <input
          type="checkbox"
          {...field}
          {...props}
          style={{
            marginRight: "0.5rem",
          }}
        />
        {children}
      </label>
    </div>
  );
};

const SignUpForm = () => {
  return (
    <Box sx={{ width: "30rem", display: "flex", flexDirection: "column" }}>
      <LogInTitle variant="h6">Sign Up</LogInTitle>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptedTerms: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
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
                <LabelField htmlFor="name">Name:</LabelField>
                <InputField
                  type="text"
                  name="name"
                  placeholder="name"
                  error={errors.name}
                />
                <CustomErrorMessage name="name" component="div" />
              </InputWrapper>
              <InputWrapper>
                <LabelField htmlFor="lastName">Last name:</LabelField>
                <InputField
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  error={errors.lastName}
                />
                <CustomErrorMessage name="lastName" component="div" />
              </InputWrapper>
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
              <InputWrapper>
                <LabelField htmlFor="confirmPassword">
                  Confirm password:
                </LabelField>
                <InputField
                  type="password"
                  name="confirmPassword"
                  placeholder="***"
                  error={errors.confirmPassword}
                />
                <CustomErrorMessage name="confirmPassword" component="div" />
              </InputWrapper>
              {/*<InputWrapper>
                 <FormControlLabel
                  name="acceptedTerms"
                  control={<Checkbox />}
                  label="I accept the Terms of Use & Privacy Policy"
                /> 
                
                <CustomErrorMessage name="acceptedTerms" component="div" />
              </InputWrapper>*/}
              {/* <InputWrapper>
                <input type="checkbox" name="acceptedTerms" />
                <label>I accept the terms and conditions</label>
              </InputWrapper> */}

              <InputWrapper sx={{ height: "2.5rem" }}>
                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>
                <CustomErrorMessage name="acceptedTerms" component="div" />
              </InputWrapper>

              <SubmitButton variant="text">Sign Up</SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default SignUpForm;
