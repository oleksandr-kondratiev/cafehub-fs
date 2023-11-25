import { Button } from "@components/button/button";

import { CreateDishProps } from "./create-dish.types";

import { theme } from "@screens/app/theme";
import { ROUTES } from "@constants/routes";

import { Container } from "@styles/container.styled";
import { CreateDishContainer } from "./create-dish.styled";

export const CreateDish = ({ navigate }: CreateDishProps) => {
  const handleProductCreate = () => {
    navigate(ROUTES.createProduct);
  };

  const handleMenuCreate = () => {
    navigate(ROUTES.createMenu);
  };

  return (
    <Container>
      <CreateDishContainer>
        <Button
          isValid
          background={`${theme.colors.grey}`}
          backgroundColor={`${theme.colors.black}`}
          onClick={handleProductCreate}
        >
          Create product
        </Button>
        <Button
          isValid
          background={`${theme.colors.grey}`}
          backgroundColor={`${theme.colors.black}`}
          onClick={handleMenuCreate}
        >
          Create menu
        </Button>
      </CreateDishContainer>
    </Container>
  );
};
