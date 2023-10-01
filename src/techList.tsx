import { TechItem } from "./techItem";
import { useTechs } from "./techsContext";

export function TechList() {
  const { techs } = useTechs();
  if (techs.length === 0) {
    return (
      <div>
        <div>Você ainda não tem tecnologias cadastradas</div>
        <div>Crie tecnologia e organize seus itens a fazer</div>
      </div>
    );
  }

  return (
    <div className="gap-1">
      {techs.map((tech) => (
        <TechItem tech={tech} />
      ))}
    </div>
  );
}
