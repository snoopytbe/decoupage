import React from "react";
import moment from "moment";
import "moment/min/locales.min";
import DepenseSimple from "./DepenseSimple.js";
import DepenseArray from "./DepenseArray.js";
import DateDepense from "./DateDepense";
import Styles from "./Styles";
import { useSelector } from "react-redux";
import { selectDateChoisie, selectDepensesToCut } from "./reducers";

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
        <p>{dateChoisie.toString()}</p>
        <p>{depensesToCut.montant + " " + depensesToCut.categorie}</p>
      </Styles>
    </div>
  );
}

class Main2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDepenseChange = this.handleDepenseChange.bind(this);
    this.state = {
      dateChoisie: moment("2021-05-18"),
      depensesToCut: { montant: 100, categorie: "Dépense" },
      decoupage: [
        { montant: 100, categorie: "Dépense" },
        { montant: 0, categorie: "" }
      ]
    };
  }

  handleDateChange(date) {
    this.setState({ dateChoisie: date });
  }

  handleDepenseChange(montant, categorie) {
    this.setState((state) => {
      const depensesToCut = {
        montant: montant,
        categorie: categorie
      };
      return { depensesToCut };
    });
  }

  render() {
    const startDate = this.state.dateChoisie;

    return (
      <div>
        <Styles>
          <h4>Date de l'opération</h4>
        </Styles>
        <DateDepense
          dateChoisie={startDate}
          onDateChoisieChange={this.handleDateChange}
        />
        <Styles>
          <h4>Dépense à découper</h4>

          <DepenseSimple
            montant={this.state.depensesToCut.montant}
            categorie={this.state.depensesToCut.categorie}
            onDepenseChange={this.handleDepenseChange}
          />

          <h4>Découpage</h4>

          <DepenseArray decoupage={this.state.decoupage} />

          <p>{this.state.dateChoisie.toString()}</p>
          <ul>
            <li>
              {this.state.depensesToCut.montant +
                " " +
                this.state.depensesToCut.categorie}
            </li>
          </ul>
        </Styles>
      </div>
    );
  }
}
export default function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
