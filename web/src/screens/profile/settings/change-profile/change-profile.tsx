import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";

import { Button } from "@components/button/button";
import { Input } from "@components/input/input";

import { ApiChangeProfile } from "./change-profile.api";

import { madeCompressedBase64 } from "@services/base64";
import { storageService } from "@services/storage-service";

import { validationSchema, valuesListTypes } from "./change-profile.types";
import { IUpdate } from "@screens/auth/additional/additional.types";

import {
  ChangeImageWrapper,
  ChangeWrapper,
  InputFileWrapper,
  InputFile,
  FileLabel,
  EmptyFileLabel,
} from "./change-profile.styled";
import {
  ConfirmWrapper,
  InputsWrapper,
  InputWrapper,
  OptionsWrapper,
  StyledError,
  StyledLabel,
  StyledMediumLink,
} from "../settings.styled";

export const ChangeProfile: React.FC = () => {
  const navigate = useNavigate();
  const handleReset = () => {
    navigate(0);
  };

  const [imageProfile, setImageProfile] = useState<string | ArrayBuffer | null>(
    ""
  );

  const { image, id, ...restUser } = storageService.getUser();

  const { changeProfile } = ApiChangeProfile();

  const handleUpdateUser = async (values: IUpdate) => {
    await changeProfile(
      {
        ...values,
        image: imageProfile?.toString(),
      },
      id
    );
  };

  const getResponse = (dataUrl: string | ArrayBuffer | null) => {
    setImageProfile(dataUrl);
  };

  const onChangeUploadUserAvatar = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files;
    await madeCompressedBase64(file![0], getResponse);
  };

  const valuesList: valuesListTypes[] = ["name", "email", "phone_number"];

  const labelHashMapping: Record<string, string> = {
    name: "Name",
    email: "Email",
    phone_number: "Phone number",
  };

  return (
    <OptionsWrapper>
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={handleUpdateUser}
      >
        {({ handleChange, handleBlur }) => (
          <Form>
            <ChangeWrapper>
              <ChangeImageWrapper image={imageProfile || image}>
                <InputFileWrapper>
                  <InputFile
                    type="file"
                    id="image"
                    name="image"
                    onChange={onChangeUploadUserAvatar}
                  />
                  <FileLabel htmlFor="image">Change</FileLabel>
                  <EmptyFileLabel htmlFor="image"></EmptyFileLabel>
                </InputFileWrapper>
              </ChangeImageWrapper>
              <InputsWrapper>
                {valuesList.map((item) => {
                  return (
                    <InputWrapper key={item}>
                      <StyledLabel>{labelHashMapping[item]}</StyledLabel>
                      <Input
                        name={item}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={"text"}
                        value={restUser[item]}
                        isWithoutLabel
                      />
                      <StyledError>
                        <ErrorMessage name={item} />
                      </StyledError>
                    </InputWrapper>
                  );
                })}
              </InputsWrapper>
            </ChangeWrapper>
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
