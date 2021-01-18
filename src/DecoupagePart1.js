import React from "react";
import { Form, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { selectPart1, updatePart1 } from "./sliceDepenseToCut";
import Depense from "Depense";

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
            />{" "}
            <div>
              <Depense
                NomMontant="montant"
                NomCategorie="categorie"
                disabled={true}
              />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}
