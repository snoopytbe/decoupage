import React from "react";
import { Field } from "react-final-form";

export default function Depense(props) {
  return (
    <>
      <Field name={props.NomMontant}>
        {(field) => (
          <input
            {...field.input}
            name={props.NomMontant}
            type="number"
            step="0.01"
            placeholder="Saisir le montant"
            required={props.required}
            disabled={props.disabled}
          />
        )}
      </Field>
      <Field name={props.NomCategorie}>
        {(field) => (
          <input
            {...field.input}
            name={props.NomCategorie}
            placeholder="Choisir la catégorie"
            type="text"
          />
        )}
      </Field>
      {console.log(props.sansSpan)}
      {props.sansSpan || (
        <>
          <span className="button" />
          <span className="button" />
        </>
      )}
    </>
  );
}
