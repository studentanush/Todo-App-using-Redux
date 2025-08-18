// firstly import the configure store
// second create a todoSlice.js file in a folder

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({// commonly it takes object as arguments
    reducer: todoReducer
}) 