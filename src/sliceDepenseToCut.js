import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "sliceDepenseToCut",
  initialState: {
    date: "2021-05-18",
    depense: { montant: 100, categorie: "Dépense" },
    part1: { montant: 100, categorie: "Dépense" },
    part2: [{ montant: 0, categorie: "" }]
  },

  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    updateDepense: (state, action) => {
      state.depense = action.payload;
    },
    updatePart1: (state, action) => {
      state.part1 = action.payload;
    },
    updatePart2: (state, action) => {
      state.part2 = action.payload;
    }
  }
});

export const {
  updateDate,
  updateDepense,
  updatePart1,
  updatePart2
} = slice.actions;

export const selectDate = (state) => state.sliceDepenseToCut.date;
export const selectDepense = (state) => state.sliceDepenseToCut.depense;
export const selectPart1 = (state) => state.sliceDepenseToCut.part1;
export const selectPart2 = (state) => state.sliceDepenseToCut.part2;

export default slice.reducer;
