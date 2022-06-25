import { useState } from "react";
import Info from "./Info";

function Movie({ movie }) {
  const { poster_path } = movie;
  const [info, setInfo] = useState(false);
  const [display, setDisplay] = useState(true);

  const abriInfo = () => {
    setInfo(true);
  };
  const cerrarInfo = () => {
    setInfo(false);
  };

  return (
    <div className={`${info ? "post active" : "post"} ${display? "display": "noDisplay"}`}>
      <img
        onLoad={() => setDisplay(false)}
        onClick={abriInfo}
        className="post__imagen"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      {info && <Info movie={movie} cerrarInfo={cerrarInfo} />}
    </div>
  );
}

export default Movie;
