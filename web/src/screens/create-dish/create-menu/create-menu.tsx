import { Form, Formik } from "formik";
import { useEffect } from "react";

import { BackLink } from "@components/back-link/back-link";
import { Button } from "@components/button/button";
import { Input } from "@components/input/input";
import { ProductSelect } from "@components/product-select/product-select";
import { MenuImage } from "@components/menu-image/menu-image";

import { useCreateDishState } from "../create-dish.state";

import { FormMenuValues, valuesListTypes } from "../create-dish.types";

import { Container } from "@styles/container.styled";
import {
  BackLinkWrapper,
  CreateProductSelectWrapper,
  CreateProductWrapper,
  ImageWrapper,
  InputWrapper,
  LeftSideWrapper,
  ProductWrapper,
} from "../create-dish.styled";

export const CreateMenu = () => {
  const {
    menu,
    addProducts,
    handleSetAddProducts,
    handleDeleteProducts,
    handleAddProducts,
    handleSubmitFormMenu,
  } = useCreateDishState();

  useEffect(() => {
    handleSetAddProducts();
  }, []);

  const valuesListGeneral: valuesListTypes[] = ["name", "description"];

  const handleSubmit = (values: FormMenuValues) => {
    handleSubmitFormMenu(values);
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
                <ImageWrapper>
                  <MenuImage menu={menu} />
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
                <CreateProductSelectWrapper>
                  <ProductSelect
                    label="ingredients"
                    ingredient={menu.products}
                    addIngredient={addProducts}
                    handleDeleteIngredients={handleDeleteProducts}
                    handleAddIngredients={handleAddProducts}
                  />
                </CreateProductSelectWrapper>
              </ProductWrapper>
            </CreateProductWrapper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
