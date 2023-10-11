import { useState } from "react";
import { CheckBox } from "./checkBox";
import { Tech } from "./tech";
import { useTechs } from "./techsContext";

type Props = {
  tech: Tech;
};

export function TechItem({ tech }: Props) {
  const { removeTech } = useTechs();

  const [finished, setFinished] = useState(false);

  function handleClick() {
    removeTech(tech.id);
  }

  function handleCheckClick() {
    setFinished((old) => !old);
  }

  return (
    <div className="bg-gray-500 flex-row rounded-0_5 gap-1 p-1">
      <CheckBox checked={!finished} onClick={handleCheckClick}></CheckBox>
      <div style={{ textDecoration: !finished ? "line-through" : "" }}>
        {tech.name}
      </div>
      <button className="ml-auto" onClick={handleClick}>
        delete
      </button>
    </div>
  );
}
