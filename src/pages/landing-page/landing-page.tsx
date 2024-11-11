import { useEffect, useState } from "react";
import LPHomeSecction from "./secctions/home";
import LPWhyTurism from "./secctions/why-turism";
import LPBenefitsSecction from "./secctions/benefits";
import LPImpactSecction from "./secctions/impact";
import { useNavbarContext } from "../../context/navbarcontext";

function LandingPage() {
  const { setTitle } = useNavbarContext();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <LPHomeSecction />,
    <LPWhyTurism />,
    <LPBenefitsSecction />,
    <LPImpactSecction />,
  ];
  let touchStartY = 0;
  let touchEndY = 0;

  // Detecta el scroll de ratón
  useEffect(() => {
    setTitle("Inicio");
    let preventScroll = false;
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      if (preventScroll) return;
      if (event.deltaY > 0) {
        // Desplazamiento hacia abajo
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        // Desplazamiento hacia arriba
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
      preventScroll = true;
      setTimeout(() => (preventScroll = false), 500);
    };

    // Detecta el desplazamiento táctil
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY > touchEndY + 100) {
        // Desplazamiento hacia abajo
        setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (touchStartY < touchEndY - 100) {
        // Desplazamiento hacia arriba
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      touchEndY = event.touches[0].clientY;
    };

    // Agrega listeners para scroll y touch
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Limpia los listeners al desmontar el componente
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sections.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {sections.map((Section, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSection ? "opacity-100" : "opacity-0"
          }`}
        >
          {Section}
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
