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
        className="bg-gray-500 text-white p-0_5"
        placeholder="Adicione uma nova tecnologia"
      />
      <button className="bg-blue-dark p-0_5" type="submit">
        Criar
      </button>
    </form>
  );
}
