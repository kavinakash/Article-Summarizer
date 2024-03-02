import { configureStore } from "@reduxjs/toolkit";

import {articleApi} from './article';
//store is the global state that stores the entire application
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})


