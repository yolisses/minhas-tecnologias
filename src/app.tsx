import { useState } from "react";
import { Tech } from "./tech";
import { TechInput } from "./techInput";
import { TechList } from "./techList";

export function App() {
  const [techs, setTechs] = useState<Tech[]>([]);

  return (
    <div>
      <h1>Minha Lista de Tecnologia</h1>
      <TechInput setTechs={setTechs} />
      <TechList techs={techs}></TechList>
    </div>
  );
}

export default App;
