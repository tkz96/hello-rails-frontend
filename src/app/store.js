import { configureStore } from '@reduxjs/toolkit'
import greetingsSlice from "../features/greetingsSlice";

export const store = configureStore({
    reducer: {
        greetings: greetingsSlice,
    },
})