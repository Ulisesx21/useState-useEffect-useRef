import { useState } from "react";
import { randomId } from "../../utils/randomId";

export const EjemploTodo = () => {
  const [todos, setTodos] = useState([
    { id: "1", content: "Aprender React" },
    { id: "2", content: "Aprender Ingles" },
  ]);

  const [inputValue, setInputValue] = useState("");

  // Valores primitivos
  // -String
  // -Number
  // -Boolean

  // Valores por referencia
  // Array
  // Objetos

  //----

  // Map o Filter

  const addTodo = (e) => {
    e.preventDefault();
    const newArray = [...todos];
    newArray.push({ id: randomId(), content: inputValue });
    setTodos(newArray);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };

  console.log(todos);

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => removeTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
