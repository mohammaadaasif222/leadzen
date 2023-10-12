import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./features/productsSlice";

const store = configureStore({
    reducer:{
        data : ProductsReducer,
    },
})

export default store;