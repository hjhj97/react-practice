import React, { ChangeEvent, useMemo, useState } from "react";

type InputFieldProps = {
  labelText: string;
  labelFor: string;
  inputName: string;
  rule?: (v: string) => boolean;
  errorMsg?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ labelText, labelFor, inputName, rule, errorMsg, value, onChange }: InputFieldProps) {
  const isValid = useMemo(() => {
    if (!rule) return true;
    return rule(value);
  }, [value]);

  return (
    <div className="input-field">
      <label htmlFor={labelFor}>{labelText}</label>
      <div>
        <input type="text" id={labelFor} name={inputName} value={value} onChange={onChange} />
        {!isValid && (
          <div>
            <p className="input-rule">{errorMsg || "형식을 확인해주세요"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;
