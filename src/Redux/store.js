import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import productSliceReducer from "./Slices/ProductSlice";
import cartSliceReducer from "./Slices/CartSlice";
import { addProduct } from "./Slices/AddProductSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        product: productSliceReducer,
        cart: cartSliceReducer,
        addProduct:addProduct
    } ,
    devTools: true
})