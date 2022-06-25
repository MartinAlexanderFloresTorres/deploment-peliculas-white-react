import { Link } from "react-router-dom";

function Info({ movie, cerrarInfo }) {
  const { title, id } = movie;
  return (
    <div className="tarjeta">
      <div className="tarjeta-close">
        <i className="bx bx-x tarjeta-close__i" onClick={cerrarInfo} />
      </div>
      <h2 className="tarjeta-title">{title}</h2>
     
      <div className="tarjeta-boton">

        <Link to={`/overview/${id}`} className="tarjeta-boton__boton ver-mas boton">
          Ver
          <i className="bx bx-plus tarjeta-boton__i" />
        </Link>
      </div>
    </div>
  );
}

export default Info;
