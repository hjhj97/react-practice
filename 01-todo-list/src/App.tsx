import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (name: string) => {
    setTodos((prev) => [...prev, { id: String(new Date().getTime()), name, isDone: false }]);
  };

  const deleteTodos = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodos = (id: string) => {
    setTodos(todos.map((todo) => (todo.id !== id ? todo : { ...todo, isDone: !todo.isDone })));
  };

  const updateTodos = (id: string, updated: string) => {
    setTodos(todos.map((todo) => (todo.id !== id ? todo : { ...todo, name: updated })));
  };

  return (
    <>
      <InputForm addTodos={addTodos} />
      <TodoList todos={todos} deleteTodos={deleteTodos} toggleTodos={toggleTodos} updateTodos={updateTodos} />
    </>
  );
}

export default App;
