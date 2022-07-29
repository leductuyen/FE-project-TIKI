import { createSlice } from '@reduxjs/toolkit';
const cartSilce = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },
        addToCart(state, actions) {
            // newItems = {id, product, Quantity}
            const newItems = actions.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItems.id);
            if (index >= 0) {
                // increase Quantity
                state.cartItems[index].quantity += newItems.quantity;
            } else {
                // add to cart
                state.cartItems.push(newItems);
            }
        },
        setQuantity(state, actions) {
            const { id, Quantity } = actions.payload;
            // check if product is availabel in cart
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].Quantity = Quantity;
            }
        },
        removeFromCart(state, actions) {
            const idNeedToRemove = actions.payload;
            state.cartItems = state.cartItems.filters((x) => x.id !== idNeedToRemove);
        },
    },
});
const { actions, reducer } = cartSilce;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
