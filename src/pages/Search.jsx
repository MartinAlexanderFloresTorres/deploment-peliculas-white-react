import { useState, useEffect } from "react";
import Buscador from "../components/Buscador";
import Spiner from "../components/Spiner";
import Movie from "../components/Movie";
let consultarApi;

function Search() {
  const [spiner, setSpiner] = useState(false);
  const [movies, setMovies] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [busquedad, setBusquedad] = useState("");

  useEffect(() => {
    consultarApi = async (busquedad) => {
      try {
        setSpiner(true);
        const key = "6095d2e844434c39761dc6eed1a12b8b";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&page=${pagina}&query=${busquedad}`;
        const respuesta = await fetch(url);
        const { results, total_pages } = await respuesta.json();
        const data = results.map((mov) => {
          const objeto = {
            id: mov.id,
            title: mov.title,
            poster_path: mov.poster_path
          };
          return objeto;
        });

        setMovies(data);
        setTotalPaginas(total_pages);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    };
    if (busquedad) {
      consultarApi(busquedad);
    }
  }, [pagina]);

  const siguiente = () => {
    if (pagina < totalPaginas) {
      setPagina(pagina + 1);
    }
  };
  const anterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (
    <div className="search max-width">
      <h2 className="search__title">Busca tu pelicula Favorita</h2>
      <Buscador
        consultarApi={consultarApi}
        busquedad={busquedad}
        setBusquedad={setBusquedad}
      />
      <div className="peliculas max-width">
        <div className="contenedor-peliculas">
          {spiner ? (
            <Spiner />
          ) : movies.length > 5 ? (
            movies.map(
              (movie) =>
                movie.id &&
                movie.poster_path &&
                movie.title && <Movie key={movie.id} movie={movie} />
            )
          ) : (
            <p className="search__noResultados">
              No hay resultados de busquedad
            </p>
          )}
        </div>
        {!spiner && movies.length > 5 && (
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
            <p className="peliculas__totalPages">
              {pagina} de {totalPaginas}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
