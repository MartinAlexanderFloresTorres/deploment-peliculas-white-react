import Detalle from "./Detalle";

function DetallesTop() {
  return (
    <section className="detalles">
      <div className="detalles-contenedor max-width">
        <div className="detalles-titulo">
          <h3 className="detalles-titulo__titulo">Más Detalles</h3>
        </div>
        <Detalle titulo="Inicio" parrafo="2022" />
        <Detalle titulo="Genero" parrafo="Variado" />
        <Detalle titulo="Descargas" parrafo="Disponible para descargar" />
        <Detalle titulo="Idioma" parrafo="Ingles[Original], Español" />
        <Detalle titulo="Subtitulos" parrafo="Ingles y Español" />
        <div className="detalle-texto">
          <h5 className="detalle-texto__title">API</h5>
          <p className="detalle-texto__parrafo">
            <a
              className="header-info__a"
              href="https://www.themoviedb.org/documentation/api"
              target="_blank"
            >
              Disponible
            </a>
          </p>
        </div>
        <div className="detalle-texto">
          <h5 className="detalle-texto__title">Contribuidores</h5>
          <p className="detalle-texto__parrafo">Martin Flores</p>
          <p className="detalle-texto__parrafo">FalconMaster</p>
          <p className="detalle-texto__parrafo">WhiteCode</p>
        </div>
        <Detalle titulo="Auspiciado" parrafo="no" />
        <Detalle titulo="Freelancer" parrafo="si" />
      </div>
    </section>
  );
}

export default DetallesTop;
