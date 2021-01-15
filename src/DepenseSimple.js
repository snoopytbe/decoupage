import React, { useState } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { selectDepensesToCut, updateDepensesToCut } from "./reducers";

export default function DepenseSimple() {
  const dispatch = useDispatch();
  const [depensesToCut] = useState(useSelector(selectDepensesToCut));

  return (
    <div className="content">
      <Form
        initialValues={{
          montant: depensesToCut.montant,
          categorie: depensesToCut.categorie
        }}
        onSubmit={(values) => {
          dispatch(
            updateDepensesToCut({
              montant: values.montant,
              categorie: values.categorie
            })
          );
        }}
      >
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              onChange={(state) => {
                dispatch(
                  updateDepensesToCut({
                    montant: state.values.montant,
                    categorie: state.values.categorie
                  })
                );
              }}
            />
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
