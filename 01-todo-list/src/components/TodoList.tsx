import React, { useState } from "react";
import { Todo } from "../App";

type TodoListProps = {
  todos: Todo[];
  deleteTodos: (id: string) => void;
  toggleTodos: (id: string) => void;
  updateTodos: (id: string, updated: string) => void;
};

function TodoList({ todos, deleteTodos, toggleTodos, updateTodos }: TodoListProps) {
  const [updateId, setUpdateId] = useState<string | null>(null);
  const [updatedText, setUpdatedText] = useState("");

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {updateId === todo.id ? (
            <input type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
          ) : (
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.name}</span>
          )}
          <button onClick={() => deleteTodos(todo.id)}>Delete</button>
          {updateId !== todo.id ? (
            <button
              onClick={() => {
                setUpdatedText(todo.name);
                setUpdateId(todo.id);
              }}
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => {
                if (!updateId || updatedText == "") return;
                updateTodos(updateId, updatedText);
                setUpdateId(null);
              }}
            >
              Finish
            </button>
          )}
          {updateId !== todo.id ? (
            <button onClick={() => toggleTodos(todo.id)}>Toggle</button>
          ) : (
            <button onClick={() => setUpdateId(null)}>Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
