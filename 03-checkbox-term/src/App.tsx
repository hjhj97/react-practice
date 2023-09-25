import { useState } from "react";
import CheckboxTerm from "./components/CheckboxTerm";

type Term = {
  id: string;
  name: string;
  isRequired: boolean;
};

export type CheckboxTermType = Term & { checked: boolean };

const data: Term[] = [
  {
    id: "checkbox-1",
    name: "Checkbox 1",
    isRequired: true,
  },
  {
    id: "checkbox-2",
    name: "Checkbox 2",
    isRequired: true,
  },
  {
    id: "checkbox-3",
    name: "Checkbox 3",
    isRequired: false,
  },
];

function App() {
  const [terms, setTerms] = useState<CheckboxTermType[]>(() => data.map((term) => ({ ...term, checked: false })));
  const onSuccess = () => alert("success");

  return (
    <>
      <CheckboxTerm terms={terms} setTerms={setTerms} onSuccess={onSuccess} />
    </>
  );
}

export default App;
