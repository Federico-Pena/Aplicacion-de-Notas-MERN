import "./App.css";
import PaginaInicio from "../pages/PaginaInicio";
import PaginaUsuarios from "../pages/PaginaUsuarios";
import Navegacion from "../Header/Navegacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navegacion />
        <Routes>
          <Route index  element={<PaginaInicio />} />
          <Route path="usuarios" element={<PaginaUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
