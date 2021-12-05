import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/charts/chartsSlice';

export const store = configureStore({
  reducer: {
    charts: chartsReducer,
  },
});
