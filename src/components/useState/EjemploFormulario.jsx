import { useState } from "react";

export const EjemploFormulario = () => {
  const [form, setForm] = useState({
    usuario: "",
    contraseña: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="usuario">Ususario</label>
        <input
          onChange={onInputChange}
          id="usuario"
          name="usuario"
          type="text"
        />

        <label htmlFor="contraseña">contraseña</label>
        <input
          onChange={onInputChange}
          id="contraseña"
          name="contraseña"
          type="password"
        />

        <label htmlFor="email">email</label>
        <input onChange={onInputChange} id="email" name="email" type="text" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
