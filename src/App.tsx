import PWABadge from "./PWABadge.tsx";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import { Route, Routes, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.tsx";
import InteractiveMap from "./pages/interactive-map/interactive-map.tsx";
import EventsPage from "./pages/events/events.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { NavbarProvider } from "./context/navbarcontext.tsx";
import DashboardPage from "./pages/dashboard/dashboard.tsx";
import StatsDashboardPage from "./pages/dashboard/views/stats.tsx";
import CrimesMapDashboardPage from "./pages/dashboard/views/crimesmap.tsx";
import RivermapDashboardPage from "./pages/dashboard/views/rivermap.tsx";
import DisablePeopleDashboardPage from "./pages/dashboard/views/disablespeoplemap.tsx";

function App() {
  return (
    <NavbarProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route path="" element={<StatsDashboardPage />} />
              <Route path="crimemap" element={<CrimesMapDashboardPage />} />
              <Route path="rivermap" element={<RivermapDashboardPage />} />
              <Route
                path="disabledpeoplemap"
                element={<DisablePeopleDashboardPage />}
              />
            </Route>
          </Routes>
          <PWABadge />
        </HashRouter>
      </LocalizationProvider>
    </NavbarProvider>
  );
}

export default App;
