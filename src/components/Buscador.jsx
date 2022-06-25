function Buscador({ consultarApi, busquedad, setBusquedad }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([busquedad.trim()].includes("")) {
      console.log("Error");
      return;
    }
    // consultar api
    consultarApi(busquedad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="buscador">
        <i className="bx bx-search" />
        <input
          value={busquedad}
          onChange={(e) => setBusquedad(e.target.value)}
          type="search"
          placeholder="Buscar"
          className="peliculas-buscar"
          required
        />{" "}
      </div>
    </form>
  );
}

export default Buscador;
