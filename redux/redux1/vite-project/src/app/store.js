import {configureStore} from "@reduxjs/toolkit"
import todoReducer from '../features/todo/Slice.js'


export const Store = configureStore({
    reducer: todoReducer
})