import { TechCounter } from "./techCounter";
import { TechInput } from "./techInput";
import { TechList } from "./techList";

export function TechsPage() {
  return (
    <div className="items-center">
      <div className="h-10 bg-gray-700 absolute top-0 w-full -z-10"></div>
      <div className="w-full max-w-40 items-stretch">
        <div className="h-10 flex-col items-center justify-center">
          <h1 className="text-blue font-bold">Minha Lista de Tecnologia</h1>
        </div>
        <div className="-translate-y-1-2">
          <TechInput />
        </div>
        <TechCounter />
        <TechList />
      </div>
    </div>
  );
}
