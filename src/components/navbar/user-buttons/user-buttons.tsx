import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavbarUserButtons() {
  return (
    <Link to="/dashboard" className="mb-3 flex h-16 w-full items-center rounded-3xl px-3">
      <FiLogIn className="mr-4 h-6 w-6" /> Iniciar sesión
    </Link>
  );
}

export default NavbarUserButtons;
