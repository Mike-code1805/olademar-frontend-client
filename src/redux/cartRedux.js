import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findDuplicatedProduct = state.products.findIndex(product => product._id === action.payload._id);
      if(state.products.length === 0 || findDuplicatedProduct < 0){
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
      console.log(findDuplicatedProduct)
      if(findDuplicatedProduct >= 0){
        state.products[findDuplicatedProduct].quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    updateAmountProduct: (state, action) => {
      const id = action.payload.id;
      const type = action.payload.type;
      const index = state.products.findIndex(product => product._id === id);

      if(type){
        state.products[index].quantity += 1;
        state.total +=  state.products[index].price;
      }
      if(!type && state.products[index].quantity > 1){
        state.products[index].quantity -= 1;
        state.total -=  state.products[index].price;
      }

    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(product => product._id === action.payload);
      state.quantity -= 1;
      state.total -= action.payload[index].price * state.products[index].quantity;
      state.products.splice(index, 1);
    },
    clearList: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, updateAmountProduct, deleteProduct, clearList } = cartSlice.actions;
export default cartSlice.reducer;
