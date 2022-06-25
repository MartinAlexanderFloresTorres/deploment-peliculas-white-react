function Banner() {
  return (
    <section className="inicio">
      <div className="inicio-contenedor max-width">
        <div className="inicio-info">
          <div className="inicio-title">
            <h1 className="inicio-title__title">White Company</h1>
            <h2 className="inicio-title__parrafo">
              Entretenimiento para tu vida
            </h2>
          </div>
          <h3 className="header-info__encabezado">Sientete Comodo</h3>
          <span className="header-info__creacion">
            <b>Creado en:</b> 2022 |{" "}
            <span className="header-info__border">16+</span>
          </span>

          <p className="header-info__parrafo">
            Te mostraremos las mejores Peliculas mas populares del momento para
            que las disfrutes, te brindaremos unos post de las Peliculas junto
            con una breve sipnosis.
          </p>
          <p className="header-info__parrafo">
            <b className="header-info__parrafo--b">Creador:</b>{" "}
            <a
              href="https://web.facebook.com/garena.flores.9/"
              target="_blank"
              className="header-info__a"
            >
              Martin Flores,
            </a>{" "}
            <a
              href="https://www.youtube.com/c/FalconMasters"
              target="_blank"
              className="header-info__a"
            >
              FalconMaster,
            </a>{" "}
            <a
              href="https://www.youtube.com/channel/UCju_sO9JlcTts9v_gMofEWw"
              target="_blank"
              className="header-info__a"
            >
              WhiteCode.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
