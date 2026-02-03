import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 or more character")
    .matches(/[0-9]/, "Add at least one Number")
    .matches(/[a-z]/, "Add at least one lowercase")
    .matches(/[A-Z]/, "Add at least one uppercase")
    .required("Password is required"),
});
