import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import { Input } from "@components/input/input";
import { Button } from "@components/button/button";

import { ROUTES } from "@constants/routes";

import { ApiAdditional } from "./additional.api";
import { storageService } from "@services/storage-service";

import { IUpdate, validationSchema, valuesListTypes } from "./additional.types";

import { Container } from "@styles/container.styled";
import { ButtonText, H1, H3, Subtitle } from "@styles/text.styled";
import { TopLine } from "@styles/top-line.styled";
import { ImageWrapper, StyledError, UnderLink } from "../auth.styled";
import { InputWrapper } from "./additional.styled";

export const Additional: React.FC = () => {
  const { UpdateAdditional } = ApiAdditional();
  const { id } = storageService.getUser();

  const handleUpdateUser = (values: IUpdate) => {
    UpdateAdditional(
      {
        ...values,
      },
      id
    );
  };

  const valuesList: valuesListTypes[] = ["name", "phone_number"];

  return (
    <>
      <TopLine>
        <H3 white>more information</H3>
      </TopLine>
      <Container maxWidth="348px" minWidth="348px">
        <Formik
          initialValues={{
            name: "",
            phone_number: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdateUser}
        >
          {({ handleChange, handleBlur, isValid, dirty }) => (
            <Form>
              <ImageWrapper>
                <H1>Welcome!</H1>
                <Subtitle>Just one little step left</Subtitle>
              </ImageWrapper>
              {valuesList.map((item) => {
                return (
                  <InputWrapper key={item}>
                    <label>
                      {item === "phone_number" ? "phone number" : item}
                    </label>
                    <Input
                      name={item}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      isWithoutLabel
                    />
                    <StyledError>
                      <ErrorMessage name={item} />
                    </StyledError>
                  </InputWrapper>
                );
              })}
              <Button type="submit" isValid={isValid && dirty}>
                Next
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
