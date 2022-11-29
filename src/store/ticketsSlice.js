/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTickets = createAsyncThunk(
    'tickets/getTickets', async (_, { rejectWithValue, dispatch }) => {
        try {
            const result = await axios.get('https://api.npoint.io/163b5e66df9f2741243e');
            dispatch(setTickets(result.data));
        }
        catch (err) {
            console.log(err)
        }
    }
)



export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        tickets: [],
    },
    reducers: {
        setTickets(state, action) {
            console.log(action.payload);
            state.tickets = action.payload
        }
    },
});

export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
