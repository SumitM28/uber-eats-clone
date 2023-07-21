import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newState = { ...state };
      if (action.payload.checkBoxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        const data = newState.selectedItems.items.filter(
          (data) => data.item.id !== action.payload.item.id
        );
        newState.selectedItems = {
          items: [...data],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log(newState);
      return newState;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
