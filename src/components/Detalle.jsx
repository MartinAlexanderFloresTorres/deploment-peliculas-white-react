function Detalle({ titulo, parrafo }) {
  return (
    <div className="detalle-texto">
      <h5 className="detalle-texto__title">{titulo}</h5>
      <p className="detalle-texto__parrafo">{parrafo}</p>
    </div>
  );
}

export default Detalle;
