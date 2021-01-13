import moment from "moment";

const initialState = {
  dateChoisie: moment("2021-05-18"),
  depensesToCut: { montant: 100, categorie: "Dépense" },
  decoupage: [
    { montant: 100, categorie: "Dépense" },
    { montant: 20, categorie: "Toto" }
  ]
};

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case
    default:
      return state;
  }
}
