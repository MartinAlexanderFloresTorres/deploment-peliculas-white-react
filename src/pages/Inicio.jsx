import Banner from "../components/Banner";
import Sombreado from "../components/Sombreado";
import DetallesTop from "../components/DetallesTop";
import DetallesBottom from "../components/DetallesBottom";
import MostrarMovies from "../components/MostrarMovies";

function Inicio() {
  return (
    <>
      <Banner />
      <Sombreado />
      <DetallesTop />
      <MostrarMovies />
      <DetallesBottom />
    </>
  );
}

export default Inicio;
