import imglogo from "../img/w.png";
import { Link, Outlet } from "react-router-dom";
import "../styles/Encabezado.css"
import "../styles/NotFound.css"

function Encabezado() {
  return (
    <div>
      <header className="header__login">
        <div className="header-contenedor max-width">
          <div className="header-logo">
            <Link to="/" className="header-logo__title">
              <img src={imglogo} alt="logo" className="logo" />
              hite
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Encabezado;
