import { Link, useNavigate } from "react-router-dom";
import imgd1 from "../img/footerstore1.png";
import imgd2 from "../img/footerstore2.png";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate()
  return (
    <section className="max-width">
      <section className="user__correo" id="user-correo">
        <div className="main__card">
          <div className="main__correo">
            <form className="main__formulario" onSubmit={(e) => {e.preventDefault(), navigate("/")}}>
              <legend>Iniciar Sesión</legend>
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
              <Link to="recuperar" className="main__pass">
                ¿Has olvidado la contraseña?
              </Link>
              <button className="boton">Iniciar sesión</button>
            </form>
          </div>
        </div>

        <div className="main__registrar">
          <p>¿No tienes una cuenta? </p>
          <Link to="registrarse" className="main__link">
            Regístrate
          </Link>
        </div>

        <div className="main__play">
          <p>Descarga la aplicación.</p>
          <div className="main__playIconos">
            <a href="#">
              <img className="main__playico" src={imgd1} alt="appleStore" />
            </a>
            <a href="#">
              <img className="main__playico" src={imgd2} alt="gogglePlay" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
