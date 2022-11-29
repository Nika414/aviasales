import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice';
import companiesReducer from './companiesSlice'

export default configureStore({
    reducer: {
        tickets: ticketsReducer,
        companies: companiesReducer,
    }
});
