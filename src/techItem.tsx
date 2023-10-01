import { Tech } from "./tech";
import { useTechs } from "./techsContext";

type Props = {
  tech: Tech;
};

export function TechItem({ tech }: Props) {
  const { removeTech } = useTechs();

  function handleClick() {
    removeTech(tech.id);
  }

  return (
    <div className="bg-gray-500 flex-row">
      {tech.name}
      <button className="ml-auto" onClick={handleClick}>
        delete
      </button>
    </div>
  );
}
