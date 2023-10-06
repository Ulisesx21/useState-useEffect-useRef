import { useState } from "react";

export const EjemploContador = () => {
  //     Valor, Función Modificadora
  const [count, setCount] = useState();

  //const value = "Hello";

  const increment = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const decrement = () => {
    setCount((oldValue) => oldValue - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Contador: {count}</p>

      <br />

      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
