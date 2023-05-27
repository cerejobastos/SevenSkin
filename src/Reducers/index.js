import { configureStore } from '@reduxjs/toolkit';
import heartRateSlice from './HeartRate.Reducer';

export default configureStore({
    reducer: {
        heartRate: heartRateSlice,
    }
});