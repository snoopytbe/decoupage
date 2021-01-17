import React, { useState } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { selectPart1, updatePart1 } from "./sliceDepenseToCut";

export default function DecoupagePart1() {
  const dispatch = useDispatch();
  const decoupage = useSelector(selectPart1);

  return (
    <div className="content">
      <Form
        initialValues={{
          montant: decoupage.montant,
          categorie: decoupage.categorie
        }}
        onSubmit={(values) => {}}
      >
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy
              onChange={(state) => {
                dispatch(
                  updatePart1({
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
                    placeholder="Montant calculé"
                    disabled
                  />
                )}
              </Field>
              <Field name="categorie">
                {(field) => (
                  <input {...field.input} name="categorie" type="text" />
                )}
              </Field>
              <span className="button" />
              <span className="button" />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
