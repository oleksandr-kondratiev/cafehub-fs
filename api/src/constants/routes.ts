export const ROUTES = {
  // DEFAULT ROUTES
  create: 'create',
  update: 'update',
  delete: 'delete/:id',
  getOne: 'get/:id',
  getAll: 'getall',

  // USERS
  users: 'users',
  userPasswordUpdate: 'update/password',

  // AUTH
  auth: 'auth',
  authRegister: 'register',
  authLogin: 'login',
  authWhoami: 'whoami',

  // ADDRESSES
  addresses: 'addresses',

  // PRODUCT
  products: 'products',

  // INGREDIENT
  ingredients: 'ingredients',

  // MENU
  menus: 'menus',

  // ORDER
  orders: 'orders',
  getAllById: 'getall/:id',
};
