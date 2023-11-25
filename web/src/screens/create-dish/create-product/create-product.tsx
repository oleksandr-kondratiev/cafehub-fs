import { Form, Formik } from "formik";
import { useEffect } from "react";

import { BackLink } from "@components/back-link/back-link";
import { Button } from "@components/button/button";
import { Input } from "@components/input/input";
import { ProductSelect } from "@components/product-select/product-select";

import { useCreateDishState } from "../create-dish.state";
import { madeCompressedBase64 } from "@services/base64";

import { valuesListTypes } from "../create-dish.types";
import { FormProductValues } from "../create-dish.types";

import { EmptyFileLabel } from "@screens/profile/settings/change-profile/change-profile.styled";
import { Container } from "@styles/container.styled";
import {
  FileLabel,
  ImageWrapper,
  InputFile,
  InputFileWrapper,
} from "./create-product.styled";
import {
  BackLinkWrapper,
  CreateProductSelectWrapper,
  CreateProductWrapper,
  InputWrapper,
  LeftSideWrapper,
  ProductWrapper,
} from "../create-dish.styled";

export const CreateProduct = () => {
  const {
    product,
    addIngredients,
    handleSetAddIngredients,
    handleDeleteIngredients,
    handleAddIngredients,
    handleSetProductImage,
    handleSubmitFormProduct,
  } = useCreateDishState();

  useEffect(() => {
    handleSetAddIngredients();
  }, []);

  const valuesListGeneral: valuesListTypes[] = ["name", "description"];
  const valuesListCategories: valuesListTypes[] = ["category", "subcategory"];
  const valuesListPrice: valuesListTypes[] = ["price", "weight"];

  const handleSubmit = (values: FormProductValues) => {
    handleSubmitFormProduct(values);
  };

  const onChangeUploadProductImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files;
    await madeCompressedBase64(file![0], handleSetProductImage);
  };

  return (
    <Container>
      <BackLinkWrapper>
        <BackLink />
      </BackLinkWrapper>
      <Formik
        initialValues={{
          name: "",
          description: "",
          category: "",
          subcategory: "",
          price: "",
          weight: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur }) => (
          <Form>
            <CreateProductWrapper>
              <LeftSideWrapper>
                <ImageWrapper image={product.productImage}>
                  <InputFileWrapper>
                    <InputFile
                      type="file"
                      id="image"
                      name="image"
                      onChange={onChangeUploadProductImage}
                    />
                    <FileLabel htmlFor="image">Upload</FileLabel>
                    <EmptyFileLabel htmlFor="image"></EmptyFileLabel>
                  </InputFileWrapper>
                </ImageWrapper>
                <Button type="submit" isValid={true}>
                  Create
                </Button>
              </LeftSideWrapper>
              <ProductWrapper>
                {valuesListGeneral.map((item) => {
                  return (
                    <InputWrapper key={item}>
                      <label>{item}:</label>
                      <Input
                        placeholder={item}
                        name={item}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        isWithoutLabel
                      />
                    </InputWrapper>
                  );
                })}
                <CreateProductSelectWrapper isHalf>
                  <ProductSelect
                    label="ingredients"
                    ingredient={product.ingredients.filter(
                      (ingredient) => !ingredient.isAllergen
                    )}
                    addIngredient={addIngredients.filter(
                      (ingredient) => !ingredient.isAllergen
                    )}
                    handleDeleteIngredients={handleDeleteIngredients}
                    handleAddIngredients={handleAddIngredients}
                  />
                  <ProductSelect
                    label="allergens"
                    ingredient={product.ingredients.filter(
                      (ingredient) => ingredient.isAllergen
                    )}
                    addIngredient={addIngredients.filter(
                      (ingredient) => ingredient.isAllergen
                    )}
                    handleDeleteIngredients={handleDeleteIngredients}
                    handleAddIngredients={handleAddIngredients}
                  />
                </CreateProductSelectWrapper>
                <CreateProductSelectWrapper isHalf>
                  {valuesListCategories.map((item) => {
                    return (
                      <InputWrapper key={item}>
                        <label>{item}:</label>
                        <Input
                          placeholder={item}
                          name={item}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          isWithoutLabel
                        />
                      </InputWrapper>
                    );
                  })}
                </CreateProductSelectWrapper>
                <CreateProductSelectWrapper isHalf>
                  {valuesListPrice.map((item) => {
                    return (
                      <InputWrapper key={item}>
                        <label>{item}:</label>
                        <Input
                          placeholder={item}
                          name={item}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          isWithoutLabel
                        />
                      </InputWrapper>
                    );
                  })}
                </CreateProductSelectWrapper>
              </ProductWrapper>
            </CreateProductWrapper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
