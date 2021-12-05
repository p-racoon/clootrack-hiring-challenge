import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchChartsData } from "./chartsAPI";

const initialState = {
  value: [],
  status: "idle",
  mode: "display",
  focusedElement: null
};


export const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    receiveChartsData: (state, action) => {
      console.log(`payload`, action.payload);
      state.value = action.payload;
    },
    updateMode: (state, action) => {
      state.mode = action.payload;
    },
    updateFocus: (state,action) =>{
      state.focusedElement = action.payload;
    }
  },
});

export const { receiveChartsData, updateMode, updateFocus } = chartsSlice.actions;

export const selectChartsData = (state) => state.charts.value;
export const mode = (state) => state.charts.mode;
export const focusedElement = (state) => state.charts.focusedElement;


export default chartsSlice.reducer;
