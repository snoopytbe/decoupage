import React from "react";
import moment from "moment";
import "moment/min/locales.min";
import "./assets/styles/base.scss";
import DepenseSimple from "./DepenseSimple.js";
import DepenseArray from "./DepenseArray.js";
import DateDepense from "./DateDepense";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const data = [
  { label: "Paris" },
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

class Main extends React.Component {
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
    this.setState(state => {
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
      <div className="main-panel">
        <div className="card">
          <div className="header">
            <h4>Date de l'opération</h4>
          </div>
          <DateDepense
            dateChoisie={startDate}
            onDateChoisieChange={this.handleDateChange}
          />
        </div>

        <div className="card">
          <div className="header">
            <h4>Dépense à découper</h4>
          </div>
          <DepenseSimple
            montant={this.state.depensesToCut.montant}
            categorie={this.state.depensesToCut.categorie}
            onDepenseChange={this.handleDepenseChange}
          />
        </div>

        <div className="card">
          <div className="header">
            <h4>Découpage</h4>
          </div>
          <DepenseArray
            decoupage={this.state.decoupage}
          />
        </div>

        <p>{startDate.toString()}</p>
        <ul>
          <li>
            {this.state.depensesToCut.montant +
              " " +
              this.state.depensesToCut.categorie}
          </li>
        </ul>
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
