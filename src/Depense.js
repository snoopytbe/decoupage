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
      <div className="content">
        <div className="form-horizontal">
          <Form
            onSubmit={
            }
          >
            {() => (
              <form>
                <div className="row">
                  <div className="form-group">
                    <label className="control-label col-md-9">Montant</label>
                    <Field name="montant">
                      {field => (
                        <div className="col-md-9">
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
                  <div className="form-group">
                    <label className="control-label col-md-9">Catégorie</label>
                    <Field name="categorie">
                      {field => (
                        <div className="col-md-9">
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
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default Depense;
