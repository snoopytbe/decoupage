import React, { useState } from "react";
import "./assets/styles/base.scss";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDepensesToCut,
  selectDecoupage,
  updateDecoupage
} from "./reducers";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

export default function DepenseArray() {
  const dispatch = useDispatch();
  const [decoupage] = useState(useSelector(selectDecoupage));
  const [depenseToCut] = useState(useSelector(selectDepensesToCut));

  return (
    <div className="content">
      <Form
        initialValues={{
          decoupe: decoupage,
          montant: decoupage[0].montant,
          categorie: decoupage[0].categorie
        }}
        onSubmit={(values) => {
          dispatch(updateDecoupage(values.decoupe));
        }}
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
            <FormSpy onChange={(state) => {}} />
            <div>
              <label>Montant</label>
              <label>Catégorie</label>
            </div>
            <div>
              <Field name="montant">
                {(field) => (
                  <input
                    {...field.input}
                    name="montant"
                    type="number"
                    step="0.01"
                    placeholder="Saisir le montant"
                    required
                  />
                )}
              </Field>
              <Field name="categorie">
                {(field) => (
                  <input {...field.input} name="categorie" type="text" />
                )}
              </Field>
              <span class="button" />
            </div>
            <FieldArray name="decoupe">
              {({ fields }) =>
                fields.map(
                  (name, index) =>
                    index > 0 && (
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
                          aria-label="action"
                          onClick={() =>
                            index < fields.length - 1
                              ? fields.remove(index)
                              : fields.push(index + 1, undefined)
                          }
                          class="button"
                          style={{ cursor: "pointer" }}
                        >
                          {index < fields.length - 1 ? "✖" : "➕"}
                        </span>
                      </div>
                    )
                )
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
