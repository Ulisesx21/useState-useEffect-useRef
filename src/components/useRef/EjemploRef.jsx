import { useRef } from "react"

export const EjemploRef = () => {
  // Guardar un valor sin que se renderize el componente

  const countRef = useRef(0);

  console.log(countRef.current)

  // const focus = () => {
  //   inputRef.current.focus()
  // }

  const increment = () => {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }
  const decrement = () => {
    countRef.current = countRef.current - 1
    console.log(countRef.current)
  }
  const reset = () => {
    countRef.current = 0
    console.log(countRef.current)
  }

  return (
    <div>
      <p>Contador: {countRef.current}</p>

      <br />

      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>+</button>
    </div>
  )
}