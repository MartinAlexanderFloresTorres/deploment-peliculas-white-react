import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Layout from "./layouts/Layout";
import Overview from "./pages/Overview";
import Encabezado from "./layouts/Encabezado";
import Login from "./pages/Login";
import RecuperarPassword from "./pages/RecuperarPassword";
import Registrarse from "./pages/Registrarse";
import NuevoPassword from "./pages/NuevoPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio title="Peliculas | Inicio" />} />
          <Route path="search" element={<Search title="Peliculas | Search" />} />
          <Route path="overview/:id" element={<Overview title="Peliculas | Overview" />} />
        </Route>

        <Route path="/login" element={<Encabezado />}>
          <Route index element={<Login title="Peliculas | Login" />} />
          <Route path="recuperar" element={<RecuperarPassword title="Peliculas | Recuperacion"  />} />
          <Route path="registrarse" element={<Registrarse title="Peliculas | Registrar" />} />
          <Route path="recuperar/confirmar" element={<NuevoPassword title="Peliculas | Confirmar" />} />
        </Route>

        <Route path="*" element={<NotFound title="Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
