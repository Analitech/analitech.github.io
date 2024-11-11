import { Card, CardContent, Typography } from "@mui/material";
import Fondo1 from "../../../assets/cancha-futbol.jpg";
import { FaCalendar, FaCheck, FaLeaf } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaShop } from "react-icons/fa6";

type IcardsInfo = {
  icon: IconType;
  color: string;
  text: string;
};

function LPWhyTurism() {
  const cardsInfo: IcardsInfo[] = [
    {
      color: "#009b77",
      icon: FaLeaf,
      text: "Exploracion Verde",
    },
    {
      color: "#ffc107",
      icon: FaCalendar,
      text: "Eventos Únicos",
    },
    {
      color: "#ff5722",
      icon: FaShop,
      text: "Apoyo a Negocios Locales",
    },
    {
      color: "#3f51b5",
      icon: FaCheck,
      text: "Recompensas Ecológicas",
    },
  ];
  return (
    <>
      <img
        src={Fondo1}
        className="absolute top-0 z-0 h-screen w-screen object-cover brightness-50"
      />
      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="flex items-center justify-center h-24 text-3xl font-bold text-white max-md:text-center">
          ¿Por qué elegir Turismo Sostenible Medellín?
        </div>
        <div className="flex flex-wrap justify-center gap-5 overflow-auto">
          {cardsInfo.map((CardContentInfo) => (
            <Card
              sx={{
                maxWidth: 150,
                maxHeight: 150,
                minWidth: 150,
                minHeight: 150,
                backgroundColor: CardContentInfo.color,
                borderRadius: "1rem",
              }}
            >
              <CardContent className="flex h-full w-full !p-4">
                <Typography
                  variant="h5"
                  component="div"
                  className="flex h-auto w-full flex-col items-center justify-center text-wrap text-center !text-lg font-bold text-white"
                >
                  <CardContentInfo.icon className="mb-auto min-h-[45px] min-w-[45px]" />
                  {CardContentInfo.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default LPWhyTurism;
