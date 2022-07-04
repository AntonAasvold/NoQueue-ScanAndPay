import { createSlice } from '@reduxjs/toolkit';

const emptyCart =  {
    cartId: '7bee673b-78df-4ac8-a0bc-0e08e607887f',
    currency: '',
    lineItems: [],
    taxGroups: [],
    totals: {
      netAmount: '0',
      taxAmount: '0',
      taxableAmount: '0',
      totalAmount: '0',
      totalDiscountAmount: '0'
  },
  directive: null
};

export const airLiftSlice = createSlice({
  name: 'airlift',
  initialState: {
    cart: null
  },
  reducers: {
    updateAirLiftCart: (state, action) => {
      state.cart = action.payload;
    },
    updateAirLiftCartLineItems: (state, action) => {
      state.cart.lineItems = [...state.cart.lineItems, action.payload];
    }
  },
});

export const { updateAirLiftCart, updateAirLiftCartLineItems } = airLiftSlice.actions;

//export const getCartLineItemCount = state => state.airlift;

export default airLiftSlice.reducer;