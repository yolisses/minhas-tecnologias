import { TechsProvider } from "./techsContext";
import { TechsPage } from "./techsPage";

export function App() {
  return (
    <TechsProvider>
      <TechsPage />
    </TechsProvider>
  );
}
