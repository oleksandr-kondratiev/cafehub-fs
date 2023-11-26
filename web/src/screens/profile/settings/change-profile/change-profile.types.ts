import * as Yup from "yup";

import { REGEXPS } from "@constants/regexps";

export type valuesListTypes = "name" | "email" | "phone_number";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .max(50, "Too long email")
    .trim()
    .matches(REGEXPS.email, "Please enter valid email"),
  name: Yup.string()
    .required("Name is required")
    .max(50, "Too long name")
    .trim()
    .matches(REGEXPS.username, "Please enter valid name"),
  phone_number: Yup.string()
    .required("Phone is required")
    .max(50, "Too long phone")
    .trim()
    .matches(REGEXPS.phone, "Please enter valid phone"),
});
