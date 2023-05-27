import { createSlice } from '@reduxjs/toolkit';

export const heartRateSlice = createSlice({
    name: "heartRates",
    initialState: {
        heartRateData: [],
    },
    reducers: {
        setHeartRateData: (state, action) => {
            state.heartRateData = action.payload;
        },
    }

});

export const { setHeartRateData, } = heartRateSlice.actions;
export default heartRateSlice.reducer;
