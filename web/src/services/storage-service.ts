import { IUser } from "typings/user";

const TOKEN_STORAGE_KEY = "token";
const USER = "user";
const CART_PRODUCTS = "products";
const CART_MENUS = "menus";

class StorageService {
  public getToken = () => {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  };
  public setToken = (token: string) => {
    return localStorage.setItem(TOKEN_STORAGE_KEY, token);
  };
  public getUser = () => {
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : {};
  };
  public setUser = (user: IUser) => {
    return localStorage.setItem(USER, JSON.stringify(user));
  };
  public getCartProducts = () => {
    const cart = localStorage.getItem(CART_PRODUCTS);
    return cart ? JSON.parse(cart) : [];
  };
  public setCartProducts = (products: string[]) => {
    localStorage.setItem(CART_PRODUCTS, JSON.stringify(products));
    return localStorage.getItem(CART_PRODUCTS);
  };
  public getCartMenus = () => {
    const cart = localStorage.getItem(CART_MENUS);
    return cart ? JSON.parse(cart) : [];
  };
  public setCartMenus = (menus: string[]) => {
    localStorage.setItem(CART_MENUS, JSON.stringify(menus));
    return localStorage.getItem(CART_MENUS);
  };
  public clearCart = () => {
    localStorage.removeItem(CART_MENUS);
    localStorage.removeItem(CART_PRODUCTS);
  };
}

export const storageService = new StorageService();
