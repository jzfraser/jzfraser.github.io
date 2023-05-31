import "./App.css";

import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
