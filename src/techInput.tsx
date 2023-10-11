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
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-row justify-center gap-0_5"
    >
      <input
        type="text"
        name="tech"
        value={name}
        onChange={handleChange}
        placeholder="Adicione uma nova tecnologia"
        className="bg-gray-500 text-white p-1 flex-1 rounded-0_5"
      />
      <button className="bg-blue-dark p-1 rounded-0_5" type="submit">
        Criar
      </button>
    </form>
  );
}
