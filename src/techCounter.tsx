import { useTechs } from "./techsContext";

export function TechCounter() {
  const { techs } = useTechs();
  const finishedCount = techs.filter((tech) => tech.finished).length;

  return (
    <div>
      <div>
        Tecnologias criadas: <span>{techs.length}</span>
      </div>
      <div>
        Concluídas: <span>{finishedCount}</span>
      </div>
    </div>
  );
}
