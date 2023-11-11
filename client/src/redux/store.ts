import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './reducers/pageReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import productReducer from './reducers/productReducer';


export const store = configureStore({
    reducer: {
        page: pageReducer,
        cart: cartReducer,
        order: orderReducer,
        product: productReducer,

    }
});