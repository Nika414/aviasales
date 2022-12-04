/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const filterTicketsSlice = createSlice({
    name: 'filterTickets',
    initialState: {
        filterTransfers: [],
        filterCompanies: [],
        filterSorting: 'cheapest',
        filteredTickets: []
    },
    reducers: {
        setTransfer(state, action) {
            console.log(action.payload);
            state.filterTransfers.push(action.payload)
        },
        removeTransfer(state, action) {
            console.log(action.payload);
            const index = state.filterTransfers.indexOf(action.payload);
            if (index > -1) {
                state.filterTransfers.splice(index, 1);
            }
        },

        setCompany(state, action) {
            console.log(action.payload);
            state.filterCompanies.push(action.payload);
        },
        setAllCompanies(state, action) {
            console.log(action.payload);
            state.filterCompanies = action.payload;
        },
        removeAllCompanies(state, action) {
            console.log(action.payload);
            state.filterCompanies = [];
        },
        removeCompany(state, action) {
            console.log(action.payload);
            const index = state.filterCompanies.indexOf(action.payload);
            if (index > -1) {
                state.filterCompanies.splice(index, 1);
            }
        },
        chooseSorting(state, action) {
            console.log(action.payload);
            state.filterSorting = action.payload;
        },
        setFilteredTickets(state, action) {
            console.log(action.payload);
            state.filteredTickets = action.payload;
        }

    },
},
);

export const { setTransfer, removeTransfer, removeAllCompanies, setAllCompanies, setCompany, removeCompany, chooseSorting, setFilteredTickets } = filterTicketsSlice.actions;
export default filterTicketsSlice.reducer;