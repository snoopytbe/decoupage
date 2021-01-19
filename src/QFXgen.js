import React from "react";
import { useSelector } from "react-redux";
import { selectPart1, selectPart2, selectDate } from "./sliceDepenseToCut";

export function qfxGen(dateChoisie, part1, part2) {
  let output = "!Type:Bank\n";
  output += `D${dateChoisie}\n`;
  output += `T${part1.montant}\n`;
  output += `${part1.categorie}\n`;
  output += "^\n";
  part2.forEach((item) => {
    output += `D${dateChoisie}\n`;
    output += `T${item.montant}\n`;
    output += `${item.categorie}\n`;
    output += "^\n";
  });
  return output;
}

export default function QFXaff() {
  const dateChoisie = useSelector(selectDate);
  const part1 = useSelector(selectPart1);
  const part2 = useSelector(selectPart2);
  return (
    <form>
      <pre>{qfxGen(dateChoisie, part1, part2)}</pre>
    </form>
  );
}
