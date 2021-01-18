import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { selectDepense, updateDepense } from "./sliceDepenseToCut";
import Depense from "Depense";

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
              <Depense
                NomMontant="montant"
                NomCategorie="categorie"
                required={true}
              />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
