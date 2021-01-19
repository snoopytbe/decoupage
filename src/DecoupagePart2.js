import React from "react";
import "./assets/styles/base.scss";
import { Form, FormSpy } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDate,
  selectDepense,
  selectPart1,
  selectPart2,
  updatePart2,
  updatePart1
} from "./sliceDepenseToCut";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import Depense from "Depense";
import { qfxGen } from "QFXgen";

export default function DecoupagePart2() {
  const dispatch = useDispatch();
  const dateChoisie = useSelector(selectDate);
  const part1 = useSelector(selectPart1);
  const part2 = useSelector(selectPart2);
  const depenseToCut = useSelector(selectDepense);

  function download() {
    let output = "";
    output = qfxGen(dateChoisie, part1, part2);

    const blob = new Blob([output]);
    const url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "test.txt");
    a.click();

    URL.revokeObjectURL(url);
  }

  const convertToFloat = (x) => {
    const parsed = parseFloat(x);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  };

  const montantPart1 = (newPart2) =>
    depenseToCut.montant -
    newPart2.reduce(
      (accumulateur, valeurCourante) =>
        accumulateur + convertToFloat(valeurCourante.montant),
      0
    );

  return (
    <div className="content">
      <Form
        initialValues={{
          tableau: part2
        }}
        onSubmit={(values) => {
          dispatch(updatePart2(values.tableau));

          let output = "";
          output = qfxGen(dateChoisie, part1, values.tableau);

          const blob = new Blob([output]);
          const url = URL.createObjectURL(blob);

          let a = document.createElement("a");
          a.setAttribute("href", url);
          a.setAttribute("download", "test.txt");
          a.click();

          URL.revokeObjectURL(url);
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
              <FormSpy
                onChange={(state) => {
                  dispatch(
                    updatePart1({
                      montant: montantPart1(state.values.tableau),
                      categorie: part1.categorie
                    })
                  );
                }}
              />
            </div>
            <FieldArray name="tableau">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={name}>
                    <Depense
                      NomMontant={`${name}.montant`}
                      NomCategorie={`${name}.categorie`}
                      required={true}
                      sansSpan={true}
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

                    <span
                      role="img"
                      aria-label="action"
                      onClick={() =>
                        index === fields.length - 1 && fields.remove(index)
                      }
                      className="button"
                      style={{ cursor: "pointer" }}
                    >
                      {index === fields.length - 1 && "✖"}
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <div className="buttons">
              <button type="submit">Télécharger</button>
            </div>
          </form>
        )}
      </Form>
      <div style={{ display: "none" }}>{dateChoisie}</div>
    </div>
  );
}
