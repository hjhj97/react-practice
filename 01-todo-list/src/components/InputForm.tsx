import React, { FormEvent, useRef } from "react";

type InputFormProps = {
  addTodos: (name: string) => void;
};

function InputForm({ addTodos }: InputFormProps) {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!todoRef.current) return;
    addTodos(todoRef.current.value);
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={todoRef} />
      <button>Add</button>
    </form>
  );
}

export default InputForm;
