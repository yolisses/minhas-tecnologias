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
    <div>
      {tech.name}
      <button onClick={handleClick}>delete</button>
    </div>
  );
}
