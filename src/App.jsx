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
          <Route index element={<Inicio />} />
          <Route path="search" element={<Search />} />
          <Route path="overview/:id" element={<Overview />} />
        </Route>

        <Route path="/login" element={<Encabezado />}>
          <Route index element={<Login />} />
          <Route path="recuperar" element={<RecuperarPassword />} />
          <Route path="registrarse" element={<Registrarse />} />
          <Route path="recuperar/confirmar" element={<NuevoPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
