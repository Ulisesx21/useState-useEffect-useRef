import { useEffect, useState } from "react";

export const Componente1 = () => {
  const [value, setValue] = useState("Hello");
  const [value2, setValue2] = useState("God Bye");

  console.log(value2, value, setValue);

  useEffect(() => {
    console.log("Componente Montado...");

    return () => {
      console.log("Componente Desmontado...");
    };
  }, []);

  useEffect(() => {
    console.log("Cambio en value");
  }, []);

  return (
    <div
      style={{ border: "1px solid white", height: "100px", padding: "10px" }}
    >
      Componente 1
      <button onClick={() => setValue2("otro valor")}>Change Value</button>
    </div>
  );
};
