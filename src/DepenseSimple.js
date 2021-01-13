import React from "react";
import { Form, Field } from "react-final-form";

class DepenseSimple extends React.Component {
  render() {
    return (
      <div className="content">
        <Form
          initialValues={{
            montant: this.props.montant,
            categorie: this.props.categorie
          }}
          onSubmit={(values) =>
            this.props.onDepenseChange(values.montant, values.categorie)
          }
        >
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Montant</label>
                <Field name="montant">
                  {(field) => (
                    <input {...field.input} name="montant" type="text" />
                  )}
                </Field>
              </div>
              <div>
                <label>Catégorie</label>
                <Field name="categorie">
                  {(field) => (
                    <input {...field.input} name="categorie" type="text" />
                  )}
                </Field>
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Valider
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default DepenseSimple;
