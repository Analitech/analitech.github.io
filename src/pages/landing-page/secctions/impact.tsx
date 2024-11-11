import Fondo1 from "../../../assets/medellin-tower.jpg";

const Comments = [
  {
    name: "Daniel Palma - Desarrollador",
    fecha: "Sábado, Noviembre 10, 2024",
    comentario:
      "Esta aplicación va a generar un gran impacto en la economia y sostenibilidad de medellin",
  },
];
function LPImpactSecction() {
  return (
    <>
      <img
        src={Fondo1}
        className="absolute top-0 z-0 h-screen w-screen object-cover brightness-50"
      />
      <div className="absolute z-10 flex h-full w-full flex-col flex-wrap items-center justify-center">
        <div className="text-xl font-bold text-white text-center">
          Nuestro Impacto en la Sostenibilidad de Medellín
        </div>
        <div className="md:mb-9 md:mt-9 flex flex-wrap gap-4 justify-center px-9">
          <div className="max-w-24 text-center font-bold text-white">
            <div className="text-lg text-green-500">16,000</div>
            <br />
            Actividades de voluntariado o limpieza realizadas.
          </div>
          <div className="max-w-24 text-center font-bold text-white">
            <div className="text-lg text-green-500">16,000</div>
            <br />
            Número de usuarios activos promoviendo turismo sostenible
          </div>
          <div className="max-w-24 text-center font-bold text-white">
            <div className="text-lg text-green-500">16,000</div>
            <br />
            Número de negocios locales certificados en la plataforma.
          </div>
          <div className="max-w-24 text-center font-bold text-white">
            <div className="text-lg text-green-500">16,000</div>
            <br />
            Toneladas de CO₂ reducidas gracias a prácticas promovidas.
          </div>
        </div>
        <div className="max-md:hidden">
          {Comments.map((commentInfo) => (
            <div className="flex w-[450px] flex-col gap-4 rounded-lg bg-white p-5 shadow-lg">
              <div className="grid grid-cols-[40px_1fr] gap-2.5">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linejoin="round"
                      fill="#707277"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#707277"
                      d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                    ></path>
                    <path
                      stroke-width="2"
                      fill="#707277"
                      stroke="#707277"
                      d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                    ></path>
                  </svg>
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-green-500"></span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-700">
                    {commentInfo.name}
                  </span>
                  <p className="text-[10px] font-semibold text-gray-400">
                    {commentInfo.fecha}
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold leading-4 text-gray-600">
                {commentInfo.comentario}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LPImpactSecction;
