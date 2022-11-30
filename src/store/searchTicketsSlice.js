/* eslint-disable default-param-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const searchTicketsSlice = createSlice({
    name: 'searchTickets',
    initialState: {
        searchOrigin: '',
        searchDestination: '',
    },
    reducers: {
        searchTicketsByOrigin(state, action) {
            console.log(action.payload);
            state.searchOrigin = action.payload
        },
        searchTicketsByDestination(state, action) {
            console.log(action.payload);
            state.searchDestination = action.payload;
        }
    },
});

export const { searchTicketsByOrigin, searchTicketsByDestination } = searchTicketsSlice.actions;
export default searchTicketsSlice.reducer;
