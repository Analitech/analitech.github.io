import { Drawer } from "@mui/material";
import { useState } from "react";
import {
  BiSearch,
  BiSolidCalendar,
  BiSolidHome,
  BiSolidLeaf,
  BiSolidMap,
  BiX,
} from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import NavbarUserButtons from "./user-buttons/user-buttons";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useNavbarContext } from "../../context/navbarcontext";

function Navbar() {
  const { Title } = useNavbarContext();
  const [DrawerOpen, SetDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    SetDrawerOpen(open);
  };

  const DrawerList = () => (
    <div
      onClick={() => toggleDrawer(!DrawerOpen)}
      className="flex h-full flex-col items-center justify-center gap-3 p-3 text-xl font-bold text-white"
    >
      <div className="flex h-full flex-col justify-center gap-3">
        <Slide cascade duration={150}>
          <Link
            to="/"
            className="flex h-16 w-full items-center rounded-3xl px-3"
          >
            <BiSolidHome className="mr-4 h-8 w-8" /> Inicio
          </Link>
          <Link
            to="/map"
            className="flex h-16 w-full items-center rounded-3xl px-3"
          >
            <BiSolidMap className="mr-4 h-8 w-8" /> Mapa
          </Link>
          <Link
            to="/events"
            className="flex h-16 w-full items-center rounded-3xl px-3"
          >
            <BiSolidCalendar className="mr-4 h-8 w-8" /> Eventos
          </Link>
          <Link
            to="/events"
            className="flex h-16 w-full items-center rounded-3xl px-3 text-left"
          >
            <BiSolidLeaf className="mr-4 h-8 w-8" /> Emprendimientos <br />
            Verdes
          </Link>
          <button className="flex h-16 w-full items-center rounded-3xl px-3">
            <GiTwoCoins className="mr-4 h-8 w-8" /> Recompensas
          </button>
        </Slide>
      </div>

      <div className="ml-auto mt-auto flex w-full flex-col content-center">
        <Fade>
          <NavbarUserButtons />
          <form className="relative ml-auto mr-5 flex h-10 w-[200px] items-center rounded-full border-b-2 border-transparent bg-white transition-all duration-500 focus-within:rounded-md focus-within:border-indigo-500">
            <button className="text-gray-400">
              <BiSearch className="ml-4 mt-1 h-4 w-4" />
            </button>
            <input
              className="h-full w-full border-none bg-transparent px-2 py-1 text-sm focus:outline-none"
              placeholder="Busqueda"
              required
              type="text"
            />
            <button
              className="text-gray-400 opacity-0 transition-opacity duration-300 hover:opacity-100"
              type="reset"
            >
              <BiX className="h-4 w-4" />
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
  return (
    <>
      <div className="absolute z-50 flex h-20 w-full items-center px-10 ">
        <IoMenu
          className="h-10 w-10 cursor-pointer text-white drop-shadow"
          onClick={() => toggleDrawer(!DrawerOpen)}
        />
        <div className="ml-auto text-white font-bold">{Title || "Titulo"}</div>
      </div>
      <Drawer
        open={DrawerOpen}
        onClose={() => toggleDrawer(false)}
        SlideProps={{
          style: {
            backgroundColor: "#000000df",
            boxShadow: "none",
            borderRadius: "0px 1rem 1rem 0px",
          },
        }}
      >
        <DrawerList />
      </Drawer>
    </>
  );
}

export default Navbar;
