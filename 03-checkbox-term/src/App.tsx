import { ChangeEvent, useMemo, useState } from "react";

const data = [
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
  const [terms, setTerms] = useState(() => data.map((term) => ({ ...term, checked: false })));

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
    <>
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
      <button disabled={!isCheckRequired} onClick={() => alert("success!")}>
        Confirm
      </button>
    </>
  );
}

export default App;
