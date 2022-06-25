import { useState, useEffect } from "react";
import Movie from "./Movie";
import Spiner from "./Spiner";

function MostrarMovies() {
  const [spiner, setSpiner] = useState(false);
  const [movies, setMovies] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const sonsultarApi = async () => {
      try {
        setSpiner(true);
        const key = "6095d2e844434c39761dc6eed1a12b8b";
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=${pagina}`;
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const data = results.map((mov) => {
          const objeto = {
            id: mov.id,
            title: mov.title,
            poster_path: mov.poster_path,
          };
          return objeto;
        });
        setMovies(data);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    };
    sonsultarApi();
  }, [pagina]);

  const siguiente = () => {
    if (pagina < 1000) {
      setPagina(pagina + 1);
    }
  };
  const anterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };
  return (
    <section className="peliculas max-width">
      <h2 className="inicio-title__title">Peliculas Populares</h2>
      <div className="contenedor-peliculas">
        {spiner ? (
          <Spiner />
        ) : (
          movies.map(
            (movie) =>
              movie.id &&
              movie.poster_path &&
              movie.title && <Movie key={movie.id} movie={movie} />
          )
        )}
      </div>
      {!spiner && movies.length > 0 && (
        <>
          <div className="peliculas-botones">
            <div className="peliculas-paginacion">
              <button
                className="peliculas-paginacion__boton boton"
                onClick={anterior}
              >
                <i className="bx bx-chevron-left peliculas-paginacion__i" />
                <p className="peliculas-paginacion__parrafo">Anterior</p>
              </button>
              <button
                className="peliculas-paginacion__boton boton"
                onClick={siguiente}
              >
                <p className="peliculas-paginacion__parrafo">Siguiente</p>{" "}
                <i className="bx bx-chevron-right peliculas-paginacion__i" />
              </button>
            </div>
          </div>
          <p className="peliculas__totalPages">{pagina} de 1000</p>
        </>
      )}
    </section>
  );
}

export default MostrarMovies;
