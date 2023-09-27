import React, { ChangeEvent, useMemo, useState } from "react";

function useInputForm<T>({ rule }: { rule: (data: T) => boolean }) {
  const [value, setValue] = useState<T | null>(null);

  const isValid = useMemo(() => {
    if (!value) return;
    return rule(value);
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return {
    value,
    onChange,
    error,
  };
}

export default useInputForm;
