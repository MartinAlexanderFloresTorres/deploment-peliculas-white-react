import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Registrarse({ title }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <section className="max-width">
      <section className="user__correo" id="user-correo">
        <div className="main__card">
          <div className="main__correo">
            <form
              className="main__formulario"
              onSubmit={(e) => {
                e.preventDefault(), navigate("/login");
              }}
            >
              <legend>Crear cuenta</legend>
              <p className="main__parrafo">
                Regístrate para ver fotos y vídeos de tus amigos.
              </p>
              <div className="main__inputContenedor">
                <label htmlFor="email" className="login__label">
                  Email
                </label>
                <input
                  className="main__input"
                  id="email"
                  type="email"
                  placeholder="Usuario o correo electronico"
                  required
                />
              </div>
              <div className="main__inputContenedor">
                <label htmlFor="nombre" className="login__label">
                  Nombre
                </label>
                <input
                  className="main__input"
                  id="nombre"
                  type="nombre"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div className="main__inputContenedor">
                <label htmlFor="usuario" className="login__label">
                  usuario
                </label>
                <input
                  className="main__input"
                  id="usuario"
                  type="usuario"
                  placeholder="Nombre usuario"
                  required
                />
              </div>
              <div className="main__inputContenedor">
                <label htmlFor="password" className="login__label">
                  Password
                </label>
                <input
                  className="main__input"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="boton">Registrarse</button>
              <p className="main__condiciones">
                Al registrarte, aceptas nuestras{" "}
                <a href="#" className="main__linkCondiciones">
                  Condiciones
                </a>
                , la{" "}
                <a href="#" className="main__linkCondiciones">
                  Política de datos
                </a>{" "}
                y{" "}
                <a href="#" className="main__linkCondiciones">
                  la Política de cookies
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="main__registrar">
          <p>¿Tienes una cuenta?</p>
          <Link to="/login" className="main__link">
            Entrar
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Registrarse;
