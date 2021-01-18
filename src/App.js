import React from "react";
import DepenseToCut from "./DepenseToCut";
import DateDepense from "./DateDepense";
import DecoupagePart1 from "./DecoupagePart1";
import DecoupagePart2 from "./DecoupagePart2";
import Styles from "./Styles";
import { useSelector } from "react-redux";
import {
  selectDate,
  selectDepense,
  selectPart1,
  selectPart2
} from "./sliceDepenseToCut";

function Main() {
  //const dateChoisie = useSelector(selectDate);
  const depenseToCut = useSelector(selectDepense);
  const part1 = useSelector(selectPart1);
  const part2 = useSelector(selectPart2);

  return (
    <div>
      <Styles>
        <h4>Date de l'opération</h4>
      </Styles>
      <DateDepense />
      <Styles>
        <h4>Dépense à découper</h4>
        <DepenseToCut />
        <h4>Découpage</h4>
        <DecoupagePart1 />
        <DecoupagePart2 />
        <p>{depenseToCut.montant + " " + depenseToCut.categorie}</p>
        <p>{part1.montant + " " + part1.categorie}</p>
        <ul>
          {part2.map((item) => (
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
