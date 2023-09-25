import React, { ChangeEvent, Dispatch, SetStateAction, useMemo } from "react";
import { CheckboxTermType } from "../App";

type CheckboxTermProps = {
  terms: CheckboxTermType[];
  setTerms: Dispatch<SetStateAction<CheckboxTermType[]>>;
  onSuccess: () => void;
};

function CheckboxTerm({ terms, setTerms, onSuccess }: CheckboxTermProps) {
  const toggleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setTerms(terms.map((term) => ({ ...term, checked })));
  };

  const isCheckAll = useMemo(() => {
    return terms.every((t) => t.checked);
  }, [terms]);

  const isCheckRequired = useMemo(() => {
    return terms.filter((t) => t.isRequired).every((t) => t.checked);
  }, [terms]);

  return (
    <div>
      <input type="checkbox" id="check-all" checked={isCheckAll} onChange={(e) => toggleSelectAll(e)} />
      <label htmlFor="check-all">전체 선택</label>
      {terms.map((checkbox) => (
        <div key={checkbox.id}>
          <input
            type="checkbox"
            id={checkbox.id}
            checked={checkbox.checked}
            onChange={(e) =>
              setTerms((prev) => prev.map((t) => (t.id !== checkbox.id ? t : { ...t, checked: e.target.checked })))
            }
          />
          <label htmlFor={checkbox.id}>
            <span>[{checkbox.isRequired ? "필수" : "선택"}]</span>
            &nbsp;&nbsp;{checkbox.name}
          </label>
        </div>
      ))}
      <button disabled={!isCheckRequired} onClick={onSuccess}>
        Confirm
      </button>
    </div>
  );
}

export default CheckboxTerm;
