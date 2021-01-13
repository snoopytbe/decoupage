import React from "react";
import "./assets/styles/base.scss";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

class DepenseArray extends React.Component {
  render() {
    return (
      <div className="content">
        <Form
          initialValues={{
            decoupe: this.props.decoupage
          }}
          onSubmit={(values) => { console.log(JSON.stringify(values.decoupe))}}
          mutators={{
            ...arrayMutators
          }}
        >
          {({
            handleSubmit,
            form: {
              mutators: { push, pop }
            },
            form,
            submitting,
            pristine,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <FieldArray name="decoupe">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <Field
                        name={`${name}.montant`}
                        component="input"
                        placeholder="Montant"
                      />

                      <Field
                        name={`${name}.categorie`}
                        component="input"
                        placeholder="Catégorie"
                      />

                      <span
                        role="img"
                        aria-label="supprimer"
                        onClick={() => fields.remove(index)}
                        style={{ cursor: "pointer" }}
                      >
                        ✖
                      </span>
                      { index === fields.length-1 ?
                      <span
                        role="img"
                        aria-label="ajouter"
                        onClick={() => fields.push(index + 1, undefined)}
                        style={{ cursor: "pointer" }}
                      >
                        ➕
                      </span> : <span
                      display="none"
                        role="img"
                        aria-label="ajouter"
                        onClick={() => fields.push(index + 1, undefined)}
                        style={{ cursor: "pointer" }}
                      >
                        ➕
                      </span>}
                    </div>
                  ))
                }
              </FieldArray>
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

export default DepenseArray;
