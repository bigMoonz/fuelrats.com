const actionTypes = [
  'ADD_NICKNAME',
  'CHANGE_PASSWORD',
  'CHECK_DECAL_ELIGIBILITY',
  'CLEAR_CART',
  'CREATE_RAT',
  'CREATE_EPICS',
  'CREATE_SHIP',
  'CREATE_STRIPE_ORDER',
  'DELETE_CART_ITEM',
  'DELETE_NICKNAME',
  'DELETE_RAT',
  'DELETE_RESCUE',
  'DELETE_SHIP',
  'DISPOSE_IMAGE',
  'GET_CART',
  'GET_CLIENT_AUTHORIZATION_PAGE',
  'GET_EPIC',
  'GET_IMAGE',
  'GET_PROFILE',
  'GET_RAT',
  'GET_RAT_LEADERBOARD',
  'GET_RATS',
  'GET_RESCUE',
  'GET_RESCUES',
  'GET_SHIP',
  'GET_SHIPS',
  'GET_STRIPE_ORDER',
  'GET_STRIPE_ORDERS',
  'GET_STRIPE_PRODUCT',
  'GET_STRIPE_PRODUCTS',
  'GET_USER',
  'GET_WORDPRESS_AUTHOR',
  'GET_WORDPRESS_POST',
  'GET_WORDPRESS_POSTS',
  'GET_WORDPRESS_CATEGORY',
  'GET_WORDPRESS_PAGE',
  'GET_WORDPRESS_PAGES',
  'INIT_SESSION',
  'LOGIN',
  'LOGOUT',
  'PAGE_CHANGE',
  'PAY_STRIPE_ORDER',
  'REDEEM_DECAL',
  'REGISTER',
  'RESET_PASSWORD',
  'SEND_PASSWORD_RESET_EMAIL',
  'SET_FLAG',
  'UPDATE_CART_ITEM',
  'UPDATE_RESCUE',
  'UPDATE_RESCUE_RATS',
  'UPDATE_RAT',
  'UPDATE_SHIP',
  'UPDATE_STRIPE_ORDER',
  'UPDATE_USER',
  'VALIDATE_PASSWORD_RESET_TOKEN',
].reduce((acc, actionType) => ({
  ...acc,
  [actionType]: actionType,
}), {})





export default actionTypes
