import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function NuevoPassword({ title }) {
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
              <legend>Restaurar password</legend>
              <p className="main__parrafo">
                Introduce tu nuevo password para que vuelvas a entrar en tu
                cuenta.
              </p>
              <div className="main__inputContenedor">
                <label htmlFor="password" className="login__label">
                  Nuevo Password
                </label>
                <input
                  className="main__input"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="main__inputContenedor">
                <label htmlFor="password-confirmar" className="login__label">
                  Confirmar Password
                </label>
                <input
                  className="main__input"
                  id="password-confirmar"
                  type="password"
                  placeholder="Confirmar Password"
                  required
                />
              </div>
              <button className="boton">Confirmar</button>
            </form>
          </div>
        </div>

        <div className="main__registrar">
          <p>¿No tienes una cuenta? </p>
          <Link to="/login/registrarse" className="main__link">
            Crear cuenta nueva
          </Link>
        </div>
        <div className="main__registrar">
          <Link to="/login" className="main__link">
            Volver al inicio de sesión
          </Link>
        </div>
      </section>
    </section>
  );
}

export default NuevoPassword;
