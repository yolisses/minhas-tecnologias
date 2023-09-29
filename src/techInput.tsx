import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Tech } from "./tech";

type Props = {
  setTechs: Dispatch<SetStateAction<Tech[]>>;
};

export function TechInput({ setTechs }: Props) {
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name) return;
    const tech: Tech = { name };
    setTechs((old) => [...old, tech]);
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
