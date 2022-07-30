import "./styles.css";
import "./Components/Contador.js";
import Contador from "./Components/Contador";

export default function App() {
  return (
    <div className="App">
      <h1 className="Titulo">Laboratorio Hooks-1</h1>
      <Contador />
    </div>
  );
}
