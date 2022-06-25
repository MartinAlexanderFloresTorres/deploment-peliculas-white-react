import { Link } from "react-router-dom";
import imgLogo from "../img/w.png";

function Sombreado() {
  return (
    <section className="sombreado max-width">
      <div className="sombreado-contenedor">
        <img src={imgLogo} alt="imagen" className="sombreado__imagen" />
        <div className="sombreado-texto">
          <p className="sombreado-texto__parrafo">Ve todo lo que quieras.</p>
          <Link to="/search" className="boton boton-width">
            Buscar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sombreado;
