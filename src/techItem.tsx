import { Tech } from "./tech";

type Props = {
  tech: Tech;
};

export function TechItem({ tech }: Props) {
  return <div>{tech.name}</div>;
}
