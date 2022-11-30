import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice';
import companiesReducer from './companiesSlice';
import searchTicketsReducer from './searchTicketsSlice'

export default configureStore({
    reducer: {
        tickets: ticketsReducer,
        companies: companiesReducer,
        searchTickets: searchTicketsReducer,
    }
});
