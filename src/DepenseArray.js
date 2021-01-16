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
  const [decoupage, setDecoupage] = useState(useSelector(selectDecoupage));
  const [depenseToCut] = useState(useSelector(selectDepensesToCut));

  const convertToFloat = (x) => {
    const parsed = parseFloat(x);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  };

  const montantDecoupage0 = (dec) =>
    depenseToCut.montant -
    dec.reduce(
      (accumulateur, valeurCourante) =>
        dec.indexOf(valeurCourante) !== 0 &&
        accumulateur + convertToFloat(valeurCourante.montant),
      0
    );

  return (
    <div className="content">
      <p>{JSON.stringify(decoupage)}</p>
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
            <div>
              <label>Montant</label>
              <label>Catégorie</label>
            </div>
            <div>
              <FormSpy
                onChange={(state) => {
                  let newMontant = montantDecoupage0(state.values.decoupe);
                  const newDecoupage = state.values.decoupe.map(
                    (item, index) => {
                      return {
                        montant: index === 0 ? newMontant : item.montant,
                        categorie: item.categorie
                      };
                    }
                  );
                  console.log(newDecoupage);
                  dispatch(updateDecoupage(newDecoupage));
                }}
              />
              <Field name="montant">
                {(field) => (
                  <input
                    {...field.input}
                    name="montant"
                    type="number"
                    step="0.01"
                    placeholder="Saisir le montant"
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
                          type="number"
                          step="0.01"
                          placeholder="Saisir le montant"
                          required
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
                          className="button"
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
