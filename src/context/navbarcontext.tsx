import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";

type userContextType = {
  Title: string | undefined;
  NavbarTheme: "dark" | "light";
  idButton: string | undefined;
  setTitle: Dispatch<string | undefined>;
  setNavbarTheme: Dispatch<"dark" | "light">;
  setidButton: Dispatch<string | undefined>;
  displayBlock: boolean | undefined;
  setDisplayblock: Dispatch<boolean>
};

export const NavbarContext = createContext<userContextType | undefined>(
  undefined,
);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "useNavbarContext debe ser usado dentro de un NavbarProvider",
    );
  }
  return context;
};

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [Title, setTitle] = useState<string | undefined>(undefined);
  const [NavbarTheme, setNavbarTheme] = useState<"dark" | "light">("light");
  const [idButton, setidButton] = useState<string | undefined>(undefined);
  const [displayBlock, setDisplayblock] = useState<boolean>(false)
  return (
    <NavbarContext.Provider
      value={{
        Title,
        NavbarTheme,
        idButton,
        setTitle,
        setNavbarTheme,
        setidButton,
        displayBlock,
        setDisplayblock
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
