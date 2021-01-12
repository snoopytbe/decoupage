import React from "react";
import "./assets/styles/base.scss";
import { Form, Field } from "react-final-form";

class Depense extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.onDepenseChange("Montant", this.props.index, values.montant);
    this.props.onDepenseChange("Categorie", this.props.index, values.categorie);
  }

  render() {
    return (
      <div className="content">
        <div className="form-horizontal">
          <Form
            initialValues={{
              montant: this.props.montant,
              categorie: this.props.categorie
            }}
            onSubmit={this.handleSubmit}
          >
            {({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group">
                    <label className="control-label col-md-9">Montant</label>
                    <Field name="montant">
                      {field => (
                        <div className="col-md-9">
                          <input {...field.input} name="montant" type="text" />
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
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default Depense;
