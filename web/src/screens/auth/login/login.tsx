import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";

import { ApiLogin } from "./login.api";

import { validationSchema } from "../auth.types";
import { valuesListTypes } from "./login.types";

import { ROUTES } from "@constants/routes";

import { Container } from "@styles/container.styled";
import {
  ImageWrapper,
  InputWrapper,
  LinkWrapper,
  StyledError,
  UnderLink,
} from "../auth.styled";
import {
  H3,
  SubtitleBold,
  ButtonText,
  H1,
  Subtitle,
} from "@styles/text.styled";
import { TopLine } from "@styles/top-line.styled";

export const Login: React.FC = () => {
  const { loginUser } = ApiLogin();

  const valuesList: valuesListTypes[] = ["email", "password"];

  return (
    <>
      <TopLine>
        <H3 white>Log In</H3>
      </TopLine>
      <Container maxWidth="348px" minWidth="348px">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={loginUser}
        >
          {({ handleChange, values, isValid, dirty, handleBlur }) => (
            <Form>
              <ImageWrapper>
                <H1>CafeHub</H1>
              </ImageWrapper>
              {valuesList.map((item) => {
                return (
                  <InputWrapper key={item}>
                    <Input
                      onBlur={handleBlur}
                      name={item}
                      onChange={handleChange}
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
                <Subtitle>Do not have an account?</Subtitle>
                <Link to={ROUTES.register}>
                  <SubtitleBold>Sign up</SubtitleBold>
                </Link>
              </LinkWrapper>
              <Button type="submit" isValid={isValid && dirty}>
                Log in
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
