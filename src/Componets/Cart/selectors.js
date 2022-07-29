import { createSelector } from '@reduxjs/toolkit';

// cart(app => storejs => cart) cartItems(cartSilce => initalState => cartItems : [])
const cartItemsSelector = (state) => state.cart.cartItems;

// Count number of products in cart
export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((count, item) => count + item.quantity, 0),
);

// Calculate total of cart
export const cartItemsTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
    cartItems.reduce((total, item) => total + item.Price * item.quantity, 0),
);

// export const ProductcartItems = createSelector(cartItemsSelector, (cartItems) => cartItems.reduce(() => cartItems));
export const ProductcartItems = createSelector(cartItemsSelector, (cartItems) => cartItems);
