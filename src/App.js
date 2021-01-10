 import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "moment/min/locales.min";
import "./assets/styles/base.scss";
import i18n from "i18next";
import { Field } from "redux-form";
import renderField from "./components/FormInputs/renderField";

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

class DateDepense extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      focused: false
    };
  }

  handleChange(date) {
    this.props.onDateChoisieChange(date);
  }

  render() {
    const startDate = this.props.dateChoisie;
    moment.locale(i18n.language);

    return (
      <div className="card">
        <div className="header">
          <h4>Date de l'opération</h4>
        </div>
        <div className="content">
          {
            <SingleDatePicker
              numberOfMonths={1}
              onDateChange={this.handleChange}
              focused={this.state.focused}
              date={startDate}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id="choixDate"
            />
          }
        </div>
      </div>
    );
  }
}

class Depense extends React.Component {
  constructor(props) {
    super(props);
    this.handleMontantChange = this.handleMontantChange.bind(this);
    this.handleCategorieChange = this.handleCategorieChange.bind(this);
  }

  handleMontantChange(e) {
    this.props.onDepenseChange("Montant", this.props.index, e.target.value);
  }

  handleCategorieChange(e) {
    this.props.onDepenseChange("Categorie", this.props.index, e.target.value);
  }

  render() {
    const montant = this.props.montant;
    const categorie = this.props.categorie;

    return (
      <div className="card">
        <div className="header">
          <h4>Stacked Form</h4>
        </div>
        <div className="content">
          <div className="form-group">
            <label className="control-label">Montant</label>
            <Field
              name="montant"
              type="text"
              value={montant}
              onChange={this.handleMontantChange}
              component={renderField}
            />
          </div>

          <div className="form-group">
            <label className="control-label">Catégorie</label>
            <Field
              name="categorie"
              type="text"
              value={categorie}
              onChange={this.handleCategorieChange}
              component={renderField}
            />
          </div>
        </div>
      </div>
    );
  }
}

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
            index={index}
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
