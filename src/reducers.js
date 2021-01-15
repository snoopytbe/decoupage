import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "updateDate",
  initialState: {
    dateChoisie: "2021-05-18",
    depensesToCut: { montant: 100, categorie: "Dépense" },
    decoupage: [
      { montant: 100, categorie: "Dépense" },
      { montant: 20, categorie: "Toto" }
    ]
  },
  reducers: {
    updateDate: (state, action) => {
      state.dateChoisie = action.payload;
    },
    updateDepensesToCut: (state, action) => {
      state.depensesToCut = action.payload;
    },
    updateDecoupage: (state, action) => {
      state.decoupage = action.payload;
    }
  }
});

export const {
  updateDate,
  updateDepensesToCut,
  updateDecoupage
} = slice.actions;

export const selectDateChoisie = (state) => state.updateDate.dateChoisie;
export const selectDepensesToCut = (state) => state.updateDate.depensesToCut;
export const selectDecoupage = (state) => state.updateDate.decoupage;

export default slice.reducer;
