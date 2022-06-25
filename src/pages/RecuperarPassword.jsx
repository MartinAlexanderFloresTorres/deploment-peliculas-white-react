import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function RecuperarPassword() {
  const navigate = useNavigate()

  return (
    <section className="max-width">
      <section className="user__correo" id="user-correo">
        <div className="main__card">
          <div className="main__correo">
            <form className="main__formulario" onSubmit={(e) => {e.preventDefault(), navigate("confirmar")}}>
              <legend>¿Tienes problemas para entrar?</legend>
              <p className="main__parrafo">
                Introduce tu correo electrónico, número de teléfono o nombre de
                usuario y te enviaremos un enlace para que vuelvas a entrar en
                tu cuenta.
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
              <button className="boton">Enviar enlace de acceso</button>
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

export default RecuperarPassword;
