import React from "react";
import DepenseToCut from "./DepenseToCut";
import DateDepense from "./DateDepense";
import DecoupagePart1 from "./DecoupagePart1";
import DecoupagePart2 from "./DecoupagePart2";
import Styles from "./Styles";
import QFXaff from "./QFXgen";

function Main() {
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
        <QFXaff />
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
