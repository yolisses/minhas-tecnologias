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
  setTechs: Dispatch<SetStateAction<Tech[]>>;
};

const techsContext = createContext({} as TechContext);

export function useTechs() {
  return useContext(techsContext);
}

export function TechsProvider({ children }: { children: ReactNode }) {
  const [techs, setTechs] = useState<Tech[]>([]);

  function addTech(name: string) {
    const tech: Tech = { name, finished: false };
    setTechs((old) => [...old, tech]);
  }

  return (
    <techsContext.Provider value={{ techs, setTechs, addTech }}>
      {children}
    </techsContext.Provider>
  );
}
