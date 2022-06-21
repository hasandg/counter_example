import {configureStore} from '@reduxjs/toolkit';
import myCustomImportNameForCounterReducer from '../features/counter/counterSlice';


const store = configureStore({
    reducer: {
        countermy: myCustomImportNameForCounterReducer
    }
})