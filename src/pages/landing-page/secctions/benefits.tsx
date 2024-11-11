import Fondo1 from "../../../assets/mural-mujer.jpg";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaMapMarkedAlt,
  FaStore,
} from "react-icons/fa";

const features = [
  {
    icon: FaMapMarkedAlt,
    title: "Mapa Interactivo",
    description:
      "Encuentra sitios de interés sostenible en Medellín. Explora parques, centros culturales y zonas verdes y conoce su impacto ambiental.",
  },
  {
    icon: FaCalendarAlt,
    title: "Eventos y Actividades",
    description:
      "Únete a eventos sostenibles en Medellín, como jornadas de limpieza y talleres de reciclaje. ¡Participa y suma puntos!",
  },
  {
    icon: FaStore ,
    title: "Negocios Verdes",
    description:
      "Descubre negocios locales comprometidos con el medio ambiente. Apoya restaurantes, tiendas y hoteles sostenibles.",
  },
  {
    icon: FaClipboardList,
    title: "Encuestas y Retroalimentación",
    description:
      "Completa encuestas para apoyar a emprendedores locales y contribuye con tus ideas para un turismo más sostenible.",
  },
];

function LPBenefitsSecction() {
  return (
    <>
      <img
        src={Fondo1}
        className="absolute top-0 z-0 h-screen w-screen object-cover brightness-50"
      />
      <div className="absolute z-10 flex h-full w-full flex-col flex-wrap items-center justify-center p-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Funciones Principales de Medallo Tour
          </h2>
          <p className="mb-12 text-center text-gray-200">
            Descubre herramientas innovadoras que te conectan con una
            experiencia de turismo sostenible en Medellín.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gap-3 rounded-lg bg-white p-6 shadow-lg max-md:flex max-md:items-center max-md:p-1 max-md:px-5"
              >
                <feature.icon className="mb-4 text-4xl text-green-600 max-md:mb-0" />
                <h3 className="mb-2 flex items-center text-xs font-semibold text-gray-800 max-md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 max-md:hidden">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LPBenefitsSecction;
