import { createSlice } from "@reduxjs/toolkit";

export const sliceDecoupage = createSlice({
  name: "sliceDecoupage",
  initialState: {},

  reducers: {
    updatePart1: (state, action) => {
      state.part1 = action.payload;
    },
    updatePart2: (state, action) => {
      state.part2 = action.payload;
    }
  }
});

export const { updatePart1, updatePart2 } = sliceDecoupage.actions;

export const selectPart1 = (state) => state.sliceDecoupage.part1;
export const selectPart2 = (state) => state.sliceDecoupage.part2;

export default sliceDecoupage.reducer;
