import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../../components/layout/layout";
import { PrivateRoutes } from "./app-private-route";

import { Login } from "@screens/auth/login/login";
import { Register } from "@screens/auth/register";
import { Additional } from "@screens/auth/additional/additional";

import { Profile } from "../profile/profile";

import { Main } from "@screens/main/main";
import { DishPage } from "@screens/dishes/dishes";

import { CreateMenu } from "@screens/create-dish/create-menu/create-menu";
import { CreateProduct } from "@screens/create-dish/create-product/create-product";

import { Cart } from "@screens/cart/cart";
import { Order } from "@screens/order/order";

import { ROUTES } from "@constants/routes";

export const RouteApp: React.FC = () => (
  <Routes>
    <Route path="*" element={<Navigate to={ROUTES.main} replace />} />
    <Route path={ROUTES.login} element={<Login />} />
    <Route path={ROUTES.register} element={<Register />} />
    <Route path={ROUTES.additional} element={<Additional />} />
    <Route element={<Layout />}>
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTES.profile} element={<Profile />} />
      </Route>
      <Route path={ROUTES.main} element={<Main />} />
      <Route path={ROUTES.productPage} element={<DishPage />} />
      <Route path={ROUTES.menuPage} element={<DishPage />} />
      <Route path={ROUTES.createProduct} element={<CreateProduct />} />
      <Route path={ROUTES.createMenu} element={<CreateMenu />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path={ROUTES.orders} element={<Order />} />
    </Route>
  </Routes>
);
