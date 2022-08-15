import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from './contactsSlice';

const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
});

export default store;