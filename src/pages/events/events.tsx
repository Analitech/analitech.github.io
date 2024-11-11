import { Checkbox, createTheme, TextField, ThemeProvider } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { MdEvent } from "react-icons/md";
import { useNavbarContext } from "../../context/navbarcontext";
import { useEffect } from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Establecer el modo oscuro
    primary: {
      main: "#1976d2", // Puedes personalizar los colores si lo deseas
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});

function EventsPage() {
  const { setTitle } = useNavbarContext();
  useEffect(() =>
    setTitle("Eventos en Medellin")
  );
  return (
    <div className="absolute pt-20 flex h-full w-full flex-col bg-gray-700">
      <div className="grid grid-cols-2 gap-5 p-5 px-9">
        <ThemeProvider theme={darkTheme}>
          <MobileDatePicker />
          <div>
            <Checkbox /> Cercca a mi
          </div>
          <TextField className="col-span-2" placeholder="Buscar por nombre" />
        </ThemeProvider>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-5 overflow-auto">
        {[...Array(5)].map(() => (
          <div className="max-w-xs rounded-lg bg-gray-100 p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                <MdEvent className="text-2xl text-white" />
              </div>
              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-lg font-semibold text-gray-800">
                  Evento Prueba
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-600">Este es un evento de preuba</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
