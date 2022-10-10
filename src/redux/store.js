import contactsReducer from './contactSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore ( {
    reducer : {
        contacts : contactsReducer
    }
});

export default store;