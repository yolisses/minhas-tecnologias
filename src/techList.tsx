import { TechItem } from "./techItem";
import { useTechs } from "./techsContext";

export function TechList() {
  const { techs } = useTechs();
  if (techs.length === 0) {
    return (
      <div
        className="items-center opacity-50"
        style={{ borderTop: "solid 1px gray", paddingTop: "3rem" }}
      >
        <div className="font-medium">
          Você ainda não tem tecnologias cadastradas
        </div>
        <div>Crie tecnologia e organize seus itens a fazer</div>
      </div>
    );
  }

  return (
    <div className="gap-0_5">
      {techs.map((tech) => (
        <TechItem tech={tech} key={tech.id} />
      ))}
    </div>
  );
}
