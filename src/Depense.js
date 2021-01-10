import React from "react";
import "./assets/styles/base.scss";
import { Field } from "redux-form";
import renderField from "./components/FormInputs/renderField";

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

export default Depense