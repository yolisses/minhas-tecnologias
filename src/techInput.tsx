import { ChangeEvent, FormEvent, useState } from "react";
import { useTechs } from "./techsContext";

export function TechInput() {
  const { addTech } = useTechs();
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name) return;
    addTech(name);
    setName("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tech"
        value={name}
        onChange={handleChange}
        placeholder="Adicione uma nova tecnologia"
      />
      <button type="submit">Criar</button>
    </form>
  );
}
