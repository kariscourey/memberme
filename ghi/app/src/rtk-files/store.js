import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { memberSlice } from './memberSlice';




export const store = configureStore({
    reducer: {
        [memberSlice.name]: memberSlice.reducer,

    },
});

setupListeners(store.dispatch);
