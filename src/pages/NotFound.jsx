import { Link } from "react-router-dom";
import Encabezado from "../layouts/Encabezado";

function NotFound() {
  return (
    <>
      <Encabezado />
      <div className="notFound max-width">
        <h1 className="ntFound__titulo">¡ESA PÁGINA NO FUE ENCONTRADA!</h1>
        <h2 className="noFound__error">
          <span className="noFound__item">4</span>
          <span className="noFound__item">0</span>
          <span className="noFound__item">4</span>
        </h2>
        <Link className="noFound__link boton" to="/">
          Volver
        </Link>
      </div>
    </>
  );
}

export default NotFound;
