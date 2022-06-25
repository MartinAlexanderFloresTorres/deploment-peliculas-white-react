import Detalle from "./Detalle";

function DetallesBottom() {
  return (
    <section className="detalles detalles_bottom">
      <div className="detalles-contenedor max-width">
        <div className="detalles-titulo">
          <h3 className="detalles-titulo__titulo">Próximamente</h3>
        </div>
        <Detalle
          titulo="Escape from Hat"
          parrafo="Un conejo desesperado acude a un puñado de aliados impensados para escapar del sombrero de un mago y volver con el niño que tanto adora."
        />
        <Detalle
          titulo="Veinticinco, veintiuno"
          parrafo="En una época en la que los sueños parecen inalcanzables, una
          esgrimista adolescente persigue sus metas y conoce a un joven
          trabajador que intenta rehacer su vida."
        />
        <Detalle
          titulo="The Good Nurse"
          parrafo="Suspicious that her colleague is behind a series of mysterious
          patient deaths, a nurse risks her own life to uncover the truth.
          Based on true events."
        />
        <Detalle
          titulo="Desde cero"
          parrafo="Una mujer estadounidense halla el amor en Italia y, luego, tras una
          pérdida, descubre el lado agridulce de la vida. Basada en la exitosa
          autobiografía de Tembi Locke."
        />
        <Detalle
          titulo="Kitty feroz"
          parrafo="Kitty y Orco se enfrentan a monstruos, derrotan a sus rivales y
          necesitan de tu ayuda para atravesar Isla Batalla y alcanzar la
          victoria en esta aventura interactiva."
        />
        <Detalle
          titulo="Vamos Zenko"
          parrafo="Niah, Ari, Ellie y Jax forman una patrulla muy singular: trabajan
          encubiertos para ayudar a otros y resolver los problemas de su
          pueblo, ¡en secreto!"
        />
        <Detalle
          titulo="El rescate de Ruby"
          parrafo="Para alcanzar su sueño de sumarse a una unidad canina de élite, un
          policía forma equipo con una lista pero traviesa cachorra llamada
          Ruby. Basada en una historia real."
        />
        <Detalle
          titulo="Deseo VIP"
          parrafo=" Ambiciosos clientes buscan casarse y subir a lo más alto de la
          escala social con la ayuda de una exclusiva agencia que le busca
          pareja a los solteros más adinerados."
        />
        <div className="detalle-texto">
          <h5 className="detalle-texto__title">API</h5>
          <p className="detalle-texto__parrafo">
            <a
              className="header-info__a"
              href="https://developers.themoviedb.org/3/movies/get-movie-videos"
              target="_blank"
            >
              Video
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetallesBottom;
