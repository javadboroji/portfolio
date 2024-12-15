import { createContext, ReactNode, useContext, useState } from "react";
interface MainContext {
  themeDark: boolean;
  setThemeDark: (value: boolean) => void;
}
const MainContext = createContext<MainContext | undefined>(undefined);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <MainContext.Provider
      value={{ themeDark, setThemeDark}}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("MainContext must be used within an MainContextProvider");
  }
  return context;
};
