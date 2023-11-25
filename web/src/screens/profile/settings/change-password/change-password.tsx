import { ErrorMessage, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";

import { ApiChangePassword } from "./change-password.api";
import { storageService } from "@services/storage-service";
import { notifyError } from "@components/notify/notify.services";

import { validationSchema, valuesListTypes } from "./change-password.types";

import { ROUTES } from "@constants/routes";

import {
  ConfirmWrapper,
  InputsWrapper,
  InputWrapper,
  OptionsWrapper,
  StyledError,
  StyledLabel,
  StyledLink,
  StyledMediumLink,
} from "../settings.styled";

export const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const handleReset = () => {
    navigate(0);
  };

  const { changePassword } = ApiChangePassword();

  const handleUpdatePassword = async (values: {
    previousPassword: string;
    newPassword: string;
  }) => {
    if (values.previousPassword !== values.newPassword) {
      const { id } = storageService.getUser();
      await changePassword(values, id);
    } else {
      notifyError("Use a password that is different from the previous one!");
    }
  };

  const valuesList: valuesListTypes[] = ["previousPassword", "newPassword"];

  const labelHashMapping: Record<string, string> = {
    previousPassword: "Input your old password",
    newPassword: "Make up a new password",
  };

  return (
    <OptionsWrapper>
      <Formik
        initialValues={{
          previousPassword: "",
          newPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleUpdatePassword}
      >
        {({ handleChange, handleBlur }) => (
          <Form>
            <InputsWrapper>
              {valuesList.map((item) => {
                return (
                  <InputWrapper key={item}>
                    <StyledLabel>{labelHashMapping[item]}</StyledLabel>
                    <Input
                      name={item}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isToggleButton
                      type={"password"}
                      isWithoutLabel
                    />
                    <StyledError>
                      <ErrorMessage name={item} />
                    </StyledError>
                  </InputWrapper>
                );
              })}
              <StyledLink to={ROUTES.main}>Forgot password?</StyledLink>
            </InputsWrapper>
            <ConfirmWrapper>
              <Button type="submit" isValid={true}>
                Change
              </Button>
              <StyledMediumLink onClick={handleReset}>Skip</StyledMediumLink>
            </ConfirmWrapper>
          </Form>
        )}
      </Formik>
    </OptionsWrapper>
  );
};
