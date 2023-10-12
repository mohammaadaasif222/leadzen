import { createSlice } from '@reduxjs/toolkit';

const setCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
        state.push({ product, quantity });
      // const existingItem = state.find((item) => item.product.id === product.id);
      // if (existingItem) {
      //   existingItem.quantity += quantity;
      // } else {
      //   state.push({ product, quantity });
      // }
      setCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.id;
      const updatedCart = state.filter((item) => item.product.id !== productIdToRemove);
      setCartToLocalStorage(updatedCart);
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
