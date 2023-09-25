import React, { useState } from "react";
import { CheckboxTermType, Term } from "../App";

function useCheckboxTerm(data: Term[]) {
  const [terms, setTerms] = useState<CheckboxTermType[]>(() => data.map((term) => ({ ...term, checked: false })));
  return {
    terms,
    setTerms,
  };
}

export default useCheckboxTerm;
