import { Fade } from "react-awesome-reveal";
import Fondo1 from "../../../assets/espectaculo.jpg";

function LPHomeSecction() {
  return (
    <>
      <img
        src={Fondo1}
        className="absolute top-0 z-0 h-screen w-screen object-cover brightness-50"
      />
      <div className="absolute z-10 flex h-full w-full flex-wrap items-center justify-center max-md:flex-col">
        <div className="mx-5 w-1/2 text-wrap text-3xl font-bold text-white max-md:w-auto max-md:text-xl">
          <Fade>
            Explora Medellín de forma sostenible. Disfruta, cuida y contribuye
          </Fade>
        </div>
        <button className="rounded-full bg-orange-600 p-5 font-bold text-white max-md:ml-auto max-md:mr-10 max-md:mt-10 max-md:p-3">
          <Fade>Explorar Ahora</Fade>
        </button>
      </div>
    </>
  );
}

export default LPHomeSecction;
