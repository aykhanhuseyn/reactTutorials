import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("email is not valid email type")
    .required("email is required"),
  password: yup
    .string()
    .min(8, "minimum length is 8")
    .max(32, "maximum length is 32")
    .required("password is required"),
});
