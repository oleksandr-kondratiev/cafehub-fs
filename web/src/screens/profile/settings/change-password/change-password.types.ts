import * as Yup from "yup";

import { REGEXPS } from "@constants/regexps";

export type valuesListTypes = "previousPassword" | "newPassword";

export const validationSchema = Yup.object().shape({
  previousPassword: Yup.string()
    .max(50, "Too long password")
    .trim()
    .required("Enter user's password")
    .matches(REGEXPS.password, "Please enter valid password"),
  newPassword: Yup.string()
    .max(50, "Too long password")
    .trim()
    .required("Enter user's password")
    .matches(REGEXPS.password, "Please enter valid password"),
});

export interface IUpdatePassword {
  previousPassword: string;
  newPassword: string;
}
