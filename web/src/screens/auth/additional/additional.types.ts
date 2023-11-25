import { REGEXPS } from "../../../constants/regexps";
import * as Yup from "yup";

export type valuesListTypes = "name" | "phone_number";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Too long name")
    .trim()
    .required("Enter user's name")
    .matches(REGEXPS.username, "Please enter valid name"),
  phone_number: Yup.string()
    .max(50, "Too long phone")
    .trim()
    .required("Enter user's phone")
    .matches(REGEXPS.phone, "Please enter valid phone"),
});

export interface IUpdate {
  name?: string;
  phone_number?: string;
  email?: string;
  image?: string;
  password?: string;
  role?: string;
}
