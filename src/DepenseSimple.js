import React from "react";
import { Form, Field } from "react-final-form";

class DepenseSimple extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Form
          initialValues={{
            montant: this.props.montant,
            categorie: this.props.categorie
          }}
          onSubmit={values =>
            this.props.onDepenseChange(values.montant, values.categorie)
          }
        >
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-horizontal row">
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
                        <input {...field.input} name="categorie" type="text" />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="form-group">
                  <label className="col-md-3" />
                  <div className="col-md-9">
                    <button
                      type="submit"
                      className="btn btn-fill btn-info"
                      disabled={submitting || pristine}
                    >
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default DepenseSimple;
