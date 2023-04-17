import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { memberSlice } from './memberSlice';
import { savedMembersApi } from './savedMembersApi';




export const store = configureStore({
    reducer: {
        [memberSlice.name]: memberSlice.reducer,
        [savedMembersApi.reducerPath]: savedMembersApi.reducer,

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(savedMembersApi.middleware)
});

setupListeners(store.dispatch);
