import React from "react";
import moment from "moment";
import "moment/min/locales.min";
import "./assets/styles/base.scss";
import Depense from "./Depense.js";
import DateDepense from "./DateDepense";

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
      depenses: [
        { montant: 100, categorie: "Dépense" },
        { montant: 100, categorie: "Dépense" },
        { montant: 0, categorie: "" }
      ]
    };
  }

  handleDateChange(date) {
    this.setState({ dateChoisie: date });
  }

  handleDepenseChange(type, i, valeur) {
    this.setState(state => {
      const depenses = state.depenses.map((item, index) => {
        if (index === i) {
          return {
            montant: type === "Montant" ? valeur : item.montant,
            categorie: type === "Categorie" ? valeur : item.categorie
          };
        } else {
          return item;
        }
      });
      return { depenses };
    });
  }

  render() {
    const startDate = this.state.dateChoisie;

    return (
      <div className="App">
        <DateDepense
          dateChoisie={startDate}
          onDateChoisieChange={this.handleDateChange}
        />
        {this.state.depenses.map((item, index) => (
          <Depense
            montant={item.montant}
            categorie={item.categorie}
            onDepenseChange={this.handleDepenseChange}
          />
        ))}
        <p>{startDate.toString()}</p>
        <ul>
          {this.state.depenses.map(item => (
            <li>{item.montant + " " + item.categorie}</li>
          ))}
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
