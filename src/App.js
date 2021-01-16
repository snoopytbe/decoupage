import React from "react";
import moment from "moment";
import "moment/min/locales.min";
import DepenseSimple from "./DepenseSimple.js";
import DepenseArray from "./DepenseArray.js";
import DateDepense from "./DateDepense";
import Styles from "./Styles";
import { useSelector } from "react-redux";
import {
  selectDateChoisie,
  selectDepensesToCut,
  selectDecoupage
} from "./reducers";

const data = [
  { label: "DepenseSimpleParis" },
  { label: "New York" },
  { label: "San Fransisco" },
  { label: "Madrid" },
  { label: "Miami" },
  { label: "London" },
  { label: "Tokyo" },
  { label: "Barcelona " },
  { label: "La Habana" },
  { label: "Buenos Aires" },
  { label: "Sao Paulo" },
  { label: "Toronto" }
];

function Main() {
  const dateChoisie = useSelector(selectDateChoisie);
  const depensesToCut = useSelector(selectDepensesToCut);
  const decoupage = useSelector(selectDecoupage);

  return (
    <div>
      <Styles>
        <h4>Date de l'opération</h4>
      </Styles>
      <DateDepense />
      <Styles>
        <h4>Dépense à découper</h4>
        <DepenseSimple />
        <h4>Découpage</h4>
        <DepenseArray />
        <p>{dateChoisie.toString()}</p>
        <p>{depensesToCut.montant + " " + depensesToCut.categorie}</p>
        <ul>
          {decoupage.map((item) => (
            <li>{item.montant + " " + item.categorie}</li>
          ))}
        </ul>
      </Styles>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
