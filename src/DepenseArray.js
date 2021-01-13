import React from "react";
import "./assets/styles/base.scss";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

class DepenseArray extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="form-horizontal">
          <Form
            initialValues={{
              decoupe: this.props.decoupage}}
            onSubmit={}
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
                <div className="form-horizontal row">
                <FieldArray name="decoupe">
                  {({ fields }) =>
                    fields.map((name, index) => (
                      <div className="form-group" key={name}>
                        <label className="control-label col-md-9">Dépense #{index + 1}</label>
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
                        <span className="col-md-3"
                          onClick={() => fields.remove(index)}
                          style={{ cursor: "pointer" }}
                        >
                          ❌
                        </span>
                        <span className="col-md-3"
                          onClick={() => fields.push(index + 1, undefined)}
                          style={{ cursor: "pointer" }}
                        >
                          +
                        </span>
                      </div>
                    ))
                  }
                </FieldArray>
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default DepenseArray;
