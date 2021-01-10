import React from "react";
import "./assets/styles/base.scss";
import { Form, Field } from "react-final-form";

class Depense extends React.Component {
  constructor(props) {
    super(props);
    this.handleMontantChange = this.handleMontantChange.bind(this);
    this.handleCategorieChange = this.handleCategorieChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMontantChange(e) {
    this.props.onDepenseChange("Montant", this.props.index, e.target.value);
  }

  handleCategorieChange(e) {
    this.props.onDepenseChange("Categorie", this.props.index, e.target.value);
  }

  handleSubmit() {}

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
            <Form
              initialValues={{
                firstName: "Dan"
              }}
              onSubmit={values => {
                // send values to the cloud
              }}
              validate={values => {
                // do validation here, and return errors object
              }}
            >
              {() => (
                <form>
                  <div>
                    <label className="control-label">Montant</label>
                    <Field name="montant">
                      {field => (
                        <div className="input-row">
                          <input
                            {...field.input}
                            name="montant"
                            type="text"
                            value={montant}
                            onChange={this.handleMontantChange}
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <label className="control-label">Catégorie</label>
                    <Field name="categorie">
                      {field => (
                        <div className="input-row">
                          <input
                            {...field.input}
                            name="categorie"
                            type="text"
                            value={categorie}
                            onChange={this.handleCategorieChange}
                          />{" "}
                        </div>
                      )}
                    </Field>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Depense;
