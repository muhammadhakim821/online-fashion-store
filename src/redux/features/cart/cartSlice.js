// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products:[],
//     selectedItems:0,
//     totalPrice:0,
//     tax:0,
//     taxRate:0.05,
//     grandTotal:0

// }

// const cartSlice = createSlice({
//     name:'cart',
//     initialState,
//     reducers:{
//         addToCart:(state,action)=>{
//             const isExist =state.products.find((product)=> product._id === action.payload._id)
//             if (!isExist) {
//                 state.products.push({...action.payload, quantity:1})
                
//             }else{
//                 console.log('item already exist')
//             }
//             state.selectedItems = setSelectedItems(state)
//             state.totalPrice = setTotalPrice(state)
//             state.tax = setTax(state)
//             state.grandTotal = setGrandTotal(state)
//         }
//     }

// })

// // utilities function
// export const setSelectedItems = (state) => state.products.reduce((total, product)=>{
//     return Number(total+product.quantity)
// }) 
// export const setTotalPrice = (state) => state.products.reduce((total, product)=>{
//     return Number(total+product.quantity * product.price)
// }) 

// export const setTax = (state) => setTotalPrice * state.taxRate


// export const setGrandTotal = (state) =>{
// return setTotalPrice(state) + setTotalPrice(state) * state.taxRate

// }

// export const {addToCart} = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   products: [],
//   selectedItems: 0,
//   totalPrice: 0,
//   tax: 0,
//   taxRate: 0.05,
//   grandTotal: 0,
// }

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingProduct = state.products.find((product) => product._id === action.payload._id)
//       if (existingProduct) {
//         existingProduct.quantity += 1
//       } else {
//         state.products.push({ ...action.payload, quantity: 1 })
//       }
//       state.selectedItems = setSelectedItems(state)
//       state.totalPrice = setTotalPrice(state)
//       state.tax = setTax(state)
//       state.grandTotal = setGrandTotal(state)
//     },
//   },
// })

// // Utility functions
// const setSelectedItems = (state) => state.products.reduce((total, product) => total + product.quantity, 0)

// const setTotalPrice = (state) => state.products.reduce((total, product) => total + product.quantity * product.price, 0)

// const setTax = (state) => setTotalPrice(state) * state.taxRate

// const setGrandTotal = (state) => setTotalPrice(state) + setTax(state)

// export const { addToCart } = cartSlice.actions
// export default cartSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        state.products[existingProductIndex].quantity += 1;
      } else {
        // If it's a new product, add it to the cart
        state.products.push({ ...action.payload, quantity: 1 });
      }
      updateCartTotals(state);
    },
    removeFromCart: (state, action) => {
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        if (state.products[existingProductIndex].quantity > 1) {
          // If quantity is more than 1, decrease it
          state.products[existingProductIndex].quantity -= 1;
        } else {
          // If quantity is 1, remove the item from the cart
          state.products.splice(existingProductIndex, 1);
        }
        updateCartTotals(state);
      }
    },
    clearCart: (state) => {
      state.products = [];
      updateCartTotals(state);
    }
  }
});

// Helper function to update cart totals
const updateCartTotals = (state) => {
  state.selectedItems = state.products.reduce((total, product) => total + product.quantity, 0);
  state.totalPrice = state.products.reduce((total, product) => total + product.quantity * product.price, 0);
  state.tax = state.totalPrice * state.taxRate;
  state.grandTotal = state.totalPrice + state.tax;
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
