import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";

import { ApiRegister } from "./register.api";

import { valuesListTypes } from "./register.types";
import { validationSchema } from "../auth.types";

import { ROUTES } from "@constants/routes";

import { Container } from "@styles/container.styled";
import {
  ImageWrapper,
  InputWrapper,
  LinkWrapper,
  StyledError,
  UnderLink,
} from "@screens/auth/auth.styled";
import {
  ButtonText,
  H1,
  H3,
  Subtitle,
  SubtitleBold,
} from "@styles/text.styled";
import { TopLine } from "@styles/top-line.styled";

export const Register: React.FC = () => {
  const { registerUser } = ApiRegister();
  const valuesList: valuesListTypes[] = ["email", "password"];

  return (
    <>
      <TopLine>
        <H3 white>Sign Up</H3>
      </TopLine>
      <Container maxWidth="348px" minWidth="348px">
        <Formik
          initialValues={{
            email: "",
            password: "",
            role: "user",
          }}
          validationSchema={validationSchema}
          onSubmit={registerUser}
        >
          {({ handleChange, handleBlur, values, isValid, dirty }) => (
            <Form>
              <ImageWrapper>
                <H1>CafeHub</H1>
              </ImageWrapper>
              {valuesList.map((item) => {
                return (
                  <InputWrapper key={item}>
                    <Input
                      name={item}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isToggleButton={item === "password"}
                      type={item === "password" ? "password" : "text"}
                      isEmpty={!!values[item]}
                    />
                    <StyledError>
                      <ErrorMessage name={item} />
                    </StyledError>
                  </InputWrapper>
                );
              })}
              <LinkWrapper>
                <Subtitle>Already have an account?</Subtitle>
                <Link to={ROUTES.login}>
                  <SubtitleBold>Log in</SubtitleBold>
                </Link>
              </LinkWrapper>
              <Button type="submit" isValid={isValid && dirty}>
                Create
              </Button>
              <UnderLink>
                <Link to={ROUTES.main}>
                  <ButtonText>Skip</ButtonText>
                </Link>
              </UnderLink>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
