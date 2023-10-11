import { Badge } from "./badge";
import { useTechs } from "./techsContext";

export function TechCounter() {
  const { techs } = useTechs();
  const finishedCount = techs.filter((tech) => tech.finished).length;

  return (
    <>
      <div className="flex-row items-center font-bold gap-0_5 pb-1">
        <div className="text-blue">Tecnologias criadas</div>
        <Badge>{techs.length}</Badge>
        <div className="ml-auto" />
        <div className="text-purple">Concluídas</div>
        <Badge>
          {finishedCount} de {techs.length}
        </Badge>
      </div>
      <hr />
    </>
  );
}
