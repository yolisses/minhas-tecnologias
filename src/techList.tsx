import { Tech } from "./tech";
import { TechItem } from "./techItem";

type Props = {
  techs: Tech[];
};

export function TechList({ techs }: Props) {
  return (
    <div>
      {techs.map((tech) => (
        <TechItem tech={tech} />
      ))}
    </div>
  );
}
