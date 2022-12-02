import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const greetURL = 'http://localhost:3000/api/v1/greetings/';
const initialState = [];

export const fetchGreeting = createAsyncThunk(
  'greetings/getGreeting',
  async () => {
    const res = await fetch(greetURL);
    const data = await res.json();

    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingsSlice.reducer;
