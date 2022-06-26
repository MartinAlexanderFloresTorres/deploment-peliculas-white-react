import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";
import "../styles/SpinerImg.css";

function Overview({ title }) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [spiner, setSpiner] = useState(false);
  const [cargado, setCargado] = useState(true);
  const [cargadoCompani, setCargadoCompani] = useState(true);

  useEffect(() => {
    document.title = title;
  }, []);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        setSpiner(true);
        const key = "6095d2e844434c39761dc6eed1a12b8b";
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-ES`;
        const respuesta = await fetch(url);
        const mov = await respuesta.json();
        const objeto = {
          id: mov.id,
          title: mov.title,
          vote_count: mov.vote_count,
          backdrop_path: mov.backdrop_path || mov.poster_path,
          overview:
            mov.overview ||
            "Lo sentimos la descripcion no esta disponible en la api. Mas informacion en https://www.themoviedb.org/",
          genres: mov.genres,
          original_language: mov.original_language || "EN",
          release_date: mov.release_date || "Antiguo",
          vote_average: mov.vote_average,
          production_companies: mov.production_companies,
        };
        setMovie(objeto);
        setSpiner(false);
      } catch (error) {
        console.error(error);
      }
    };
    consultarApi();
  }, []);

  return (
    <div className="post-detalle-padding max-width">
      <div className="post-detalle-overview">
        {spiner ? (
          <Spiner />
        ) : movie.id && movie.overview ? (
          <div className="post-detalle">
            {movie.backdrop_path && (
              <div className="post__imagen--loader">
                <img
                  className="post__img post__img--loader"
                  width="100"
                  height="50"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt="movie"
                  onLoad={() => setCargado(false)}
                />
                {cargado && <div className="spinner"></div>}
              </div>
            )}
            <div className="post__bottom">
              <h2 className="post-titulo">{movie.title}</h2>
              <p className="post-detalle__parrafo">{movie.overview}</p>
            </div>
            <div className="post__bottom-2">
              <div className="post-info">
                <div className="post-tiempo">
                  <p className="post-tiempo__fecha">{movie.release_date}</p> -
                  <p className="post-tiempo__fecha"> Idioma:</p>
                  <p className="post-tiempo__idioma">
                    {movie.original_language}
                  </p>
                </div>
                <div>
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bx-star" />
                  <i className="bx bx-star" />
                  <br />
                  <br />
                  <p>Votos: {movie.vote_average}%</p>
                </div>
              </div>
              <div className="post-info-botton">
                <div>
                  <span>Etiquetas: </span>
                  {movie.genres.length > 0 &&
                    movie.genres.map((a) => (
                      <span className="post-etiquetas" key={a.id}>
                        {a.name || "Pelicula"}
                      </span>
                    ))}
                </div>
                {movie.production_companies.length > 0 &&
                  movie.production_companies[0].logo_path && (
                    <div className="post__imagen--loader-dos">
                      <img
                        className="post-logo"
                        width="100"
                        height="100"
                        src={`https://image.tmdb.org/t/p/w500/${movie.production_companies[0].logo_path}`}
                        alt="compania"
                        onLoad={() => setCargadoCompani(false)}
                      />
                      {cargadoCompani && <div className="spinner"></div>}
                    </div>
                  )}
              </div>
            </div>
          </div>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

export default Overview;
