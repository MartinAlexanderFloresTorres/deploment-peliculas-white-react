import { useState } from "react";
import { Link } from "react-router-dom";
import imglogo from "../img/w.png";

function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <div className="header-contenedor max-width">
        <div className="header-logo">
          <Link to="/" className="header-logo__title">
            <img src={imglogo} alt="logo" className="logo" />
            hite
          </Link>
        </div>
        <div className="header-icono" onClick={handleMenu}>
          <i className="bx bx-menu header__menu" />
        </div>
        <div
          className={`${menu ? "header-botones active" : "header-botones "}`}
        >
          <div className="header-padding">
            <p className="header-botones__texto">
              PELÍCULAS Y SERIES ILIMITADAS
            </p>
            <Link
              to="/search"
              className="boton boton-width"
              onClick={() => setMenu(false)}
            >
              Buscar Peliculas
            </Link>
            <Link
              to="/login"
              className="boton boton-width"
              onClick={() => setMenu(false)}
            >
              INICIAR SESIÓN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
