import IconButton from "@mui/material/IconButton";
import { BiStats } from "react-icons/bi";
import map from "../../assets/delitos-en-itios_t.jpg";
import { FaWater, FaWheelchair } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import Map from "../../components/map/map";
import { Link, Outlet } from "react-router-dom";
export default function MiniDrawer() {
  return (
    <div className="absolute flex h-full w-full bg-slate-600 pt-20">
      <div className="flex w-20 flex-col items-center justify-center bg-slate-700">
        <Link to="/dashboard/">
          <IconButton size="large" className="bg-blue-600">
            <BiStats className="text-2xl text-white" />
          </IconButton>
        </Link>

        <Link to="/dashboard/disabledpeoplemap">
          <IconButton size="large" className="bg-blue-600">
            <FaWheelchair className="text-2xl text-white" />
          </IconButton>
        </Link>

        <Link to="/dashboard/rivermap">
          <IconButton size="large" className="bg-blue-600">
            <FaWater className="text-2xl text-white" />
          </IconButton>
        </Link>
        <Link to="/dashboard/crimemap">
          <IconButton size="large" className="bg-blue-600">
            <FaGun className="text-2xl text-white" />
          </IconButton>
        </Link>
      </div>
      <div className="h-full w-full overflow-auto flex-1">
        <Outlet />
      </div>
    </div>
  );
}
