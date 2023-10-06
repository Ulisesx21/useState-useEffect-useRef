import { useState } from "react"
import { Componente1 } from "./Componente1"

export const EjemploUseEffect = () => {

  const [boolean, setBoolean] = useState(false);

  return (
    <div>
      {boolean && <Componente1 />}

      <button onClick={() => setBoolean(!boolean)}>Switch</button>
    </div>
  )
}