/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanies = createAsyncThunk(
'companies/getCompanies', async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://api.npoint.io/a1b1c28b32d9785bb26c')
    dispatch(setCompanies(result.data))
}
)



export const companiesSlice = createSlice({
    name: 'companies',
    initialState: {
        companies: [],
    },
    reducers: {
        setCompanies(state, action) {
          state.companies = action.payload  
        }
    },
    extraReducers: {
        [getCompanies.fulfilled]: () => {
        }
    } 
});

export const { setCompanies } = companiesSlice.actions;
export default companiesSlice.reducer;
