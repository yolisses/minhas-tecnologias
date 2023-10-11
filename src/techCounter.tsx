import { useTechs } from "./techsContext";

export function TechCounter() {
  const { techs } = useTechs();
  const finishedCount = techs.filter((tech) => tech.finished).length;

  return (
    <>
      <div className="flex-row items-center font-bold gap-1 pb-1">
        <div className="text-blue">Tecnologias criadas</div>
        <div>{techs.length}</div>
        <div className="ml-auto"></div>
        <div className="text-purple">Concluídas</div>
        <div>{finishedCount}</div>
      </div>
      <hr />
    </>
  );
}
