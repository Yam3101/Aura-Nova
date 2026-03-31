import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "@/layout/SiteLayout.jsx";
import Home from "@/pages/Home.jsx";
import Modelo from "@/pages/Modelo.jsx";
import Galeria from "@/pages/Galeria.jsx";
import Ubicacion from "@/pages/Ubicacion.jsx";
import Contacto from "@/pages/Contacto.jsx";
import NotFound from "@/pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/modelo" element={<Modelo />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

