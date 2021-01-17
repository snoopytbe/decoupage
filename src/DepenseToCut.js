import React, { useState } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { selectDepense, updateDepense } from "./sliceDepenseToCut";

export default function DepenseToCut() {
  const dispatch = useDispatch();
  const depenseToCut = useSelector(selectDepense);

  return (
    <div className="content">
      <Form
        initialValues={{
          montant: depenseToCut.montant,
          categorie: depenseToCut.categorie
        }}
        onSubmit={(values) => {}}
      >
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              onChange={(state) => {
                dispatch(
                  updateDepense({
                    montant: state.values.montant,
                    categorie: state.values.categorie
                  })
                );
              }}
            />

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
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
