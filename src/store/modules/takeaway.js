import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if(item) {
        item.count++
      } else {
        action.payload.count = 1
        state.cartList.push(action.payload)
      }
    },
    // cart count++
    increCount (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      item.count++
    },
    // cart count--
    decreCount (state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      console.log(state.cartList)
      if (item.count === 1) {
        state.cartList.pop(item.id)
        return
      }
      item.count--
    },
    // clear cart
    clearCart (state) {
      state.cartList = []
    }
  },
});

const { setFoodsList, changeActiveIndex, addCart, increCount, decreCount,clearCart } = foodStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway")
    dispatch(setFoodsList(res.data))
  };
};

export { fetchFoodsList, changeActiveIndex, addCart, increCount, decreCount,clearCart }

const reducer = foodStore.reducer

export default reducer
