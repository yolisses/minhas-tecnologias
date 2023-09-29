import { TechCounter } from "./techCounter";
import { TechInput } from "./techInput";
import { TechList } from "./techList";

export function TechsPage() {
  return (
    <div>
      <h1>Minha Lista de Tecnologia</h1>
      <TechInput />
      <TechCounter />
      <TechList />
    </div>
  );
}
