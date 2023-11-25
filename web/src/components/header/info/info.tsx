import { useState } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

import { useAppSelector } from "../../../hooks/redux";

import { Input } from "@components/input/input";
import { Button } from "@components/button/button";
import { FuseProduct } from "./product/fuse-product";
import { FuseMenu } from "./menu/fuse-menu";

import { InfoProps } from "./info.types";

import { theme } from "@screens/app/theme";
import { ICONS } from "@constants/icons";
import { ROUTES } from "@constants/routes";

import {
  CartNumber,
  CartWrapper,
  FuseSearchList,
  HeaderInfo,
  IconBox,
  InputWrapper,
  HeaderLogo,
  Image,
  ModalWrapper,
  AuthorImage,
  AuthorInfoWrapper,
  AuthorInfoItem,
} from "./info.styled";
import { H2, Subtitle, SubtitleBold } from "@styles/text.styled";
import { IMAGES } from "@constants/images";
import { ModalWindow } from "@components/modal/modal";

export const Info = ({ navigate }: InfoProps) => {
  const [targetValue, setTargetValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const handleModalToggler = () => {
    setIsOpen((prev) => !prev);
  };

  const { cartNumber } = useAppSelector((state) => state.CartReducer);
  const { MenusReducer, ProductsReducer } = useAppSelector((state) => state);

  const page = window.location.href.split("/").pop();

  const productsList = [...ProductsReducer.products];
  const menusList = [...MenusReducer.menus];

  const options = {
    isCaseSensitive: false,
    includeScore: false,
    findAllMatches: false,
    includeMatches: true,
    shouldSort: true,
    useExtendedSearch: false,
    ignoreFieldNorm: false,
    keys: ["name", "description"],
  };

  const fuseProduct = new Fuse(productsList, options);
  const fuseMenu = new Fuse(menusList, options);

  const handleFuseSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setTargetValue(event.currentTarget.value);
  };

  return (
    <>
      <HeaderInfo>
        <HeaderLogo to={ROUTES.main}>
          <H2 white>CafeHub</H2>
        </HeaderLogo>
        <IconBox>
          <Image
            src={IMAGES.programmer}
            alt="programmer"
            onClick={handleModalToggler}
          />
          <Link to={ROUTES.cart}>
            <Button isIcon>
              <CartWrapper>
                {cartNumber !== 0 && <CartNumber>{cartNumber}</CartNumber>}
                <img src={ICONS.bytesizeCart} alt="cart" />
              </CartWrapper>
            </Button>
          </Link>
        </IconBox>
        <InputWrapper>
          <Input
            isToggleButton
            isWithoutLabel
            type="text"
            color={theme.colors.white}
            icon="search"
            onChange={handleFuseSearch}
            disabled={page !== ROUTES.main}
            placeholder="Search..."
          />
          <FuseSearchList>
            {fuseProduct.search(targetValue).map((product) => (
              <FuseProduct
                id={product.item.id!}
                productImage={product.item.productImage}
                name={product.item.name}
                description={product.item.description}
                setTargetValue={setTargetValue}
                navigate={navigate}
              />
            ))}
            {fuseMenu.search(targetValue).map((menu) => (
              <FuseMenu
                menu={menu.item}
                setTargetValue={setTargetValue}
                navigate={navigate}
              />
            ))}
          </FuseSearchList>
        </InputWrapper>
      </HeaderInfo>
      <ModalWindow
        caption="Автор"
        isOpen={isOpen}
        onRequestClose={handleModalToggler}
      >
        <ModalWrapper>
          <AuthorInfoWrapper>
            <AuthorInfoItem>
              <SubtitleBold>Курсова робота за темою:</SubtitleBold>
              <Subtitle>
                Розроблення програмного продукту для інтернет-доставки
                ресторана: робота з базою даних, оптимізація замовлень та
                користувацький інтерфейс.
              </Subtitle>
            </AuthorInfoItem>
            <AuthorInfoItem>
              <SubtitleBold>Виконав:</SubtitleBold>
              <Subtitle>студент 6.04.122.010.21.4</Subtitle>
              <Subtitle>Кондратьєв О. А.</Subtitle>
            </AuthorInfoItem>
          </AuthorInfoWrapper>
          <AuthorImage
            src="https://media.licdn.com/dms/image/D4E03AQG5Ge_KL8UUBw/profile-displayphoto-shrink_400_400/0/1673424697825?e=1706140800&v=beta&t=vpu57AepsVU82N4zvKFkBDlLbL9_efKK25HD0NxqS7I"
            alt="author"
          />
        </ModalWrapper>
      </ModalWindow>
    </>
  );
};
