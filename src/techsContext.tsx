import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Tech } from "./tech";

type TechContext = {
  techs: Tech[];
  addTech: (name: string) => void;
  removeTech: (id: string) => void;
  setTechs: Dispatch<SetStateAction<Tech[]>>;
  toggleTech: (tech: Tech) => void;
};

const techsContext = createContext({} as TechContext);

export function useTechs() {
  return useContext(techsContext);
}

export function TechsProvider({ children }: { children: ReactNode }) {
  const [techs, setTechs] = useState<Tech[]>([]);

  function addTech(name: string) {
    const id = "" + Math.random();
    const tech: Tech = { id, name, finished: false };
    setTechs((old) => [...old, tech]);
  }

  function removeTech(id: string) {
    setTechs((old) => old.filter((tech) => tech.id !== id));
  }

  function refresh() {
    setTechs((old) => [...old]);
  }

  function toggleTech(tech: Tech) {
    tech.finished = !tech.finished;
    refresh();
  }

  return (
    <techsContext.Provider
      value={{
        techs,
        addTech,
        setTechs,
        removeTech,
        toggleTech,
      }}
    >
      {children}
    </techsContext.Provider>
  );
}
