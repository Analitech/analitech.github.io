import { Fab } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import Map from "../../components/map/map";
import { useNavbarContext } from "../../context/navbarcontext";
import { useEffect } from "react";

function InteractiveMap() {
  const { setTitle } = useNavbarContext();

  useEffect(() =>
    setTitle("Mapa interactivo")
  );
  return (
    <div className="absolute -z-50 flex h-full w-full bg-slate-600">
      <div className="absolute flex h-full w-full">
        <Map />
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col gap-5 p-8">
        <Fab className="" color="primary" aria-label="add">
          <MdTour className="text-xl" />
        </Fab>
        <Fab className="" color="primary" aria-label="add">
          <FaShop className="text-xl" />
        </Fab>
        <Fab className="" color="primary" aria-label="add">
          <FaPlus className="text-xl" />
        </Fab>
      </div>
    </div>
  );
}

export default InteractiveMap;
