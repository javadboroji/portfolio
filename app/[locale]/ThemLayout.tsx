"use client";
import React, { ReactNode, useEffect, useState } from "react";
import ThemeColorCustom from "./Components/ThemeColorCustom";
import { Row } from "antd";
import Navgation from "./Components/Navgation";
import { MainContextProvider } from "./context/MainContext";
import { usePathname } from "next/navigation";

const ThemLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const path = usePathname();
  const [isPanle, setIsPanle] = useState(false);

  useEffect(() => {
    const dashboardPaths = [/^\/fa\/dashboard(\/|\/.*)?$/, /^\/en\/dashboard(\/|\/.*)?$/];
    const isDashboardPath = dashboardPaths.some(regex => regex.test(path));
    if (isDashboardPath) {
      setIsPanle(true);
    } else {
      setIsPanle(false);
    }
  }, [path]);

  return (
    <MainContextProvider>
      {!isPanle ? (
        <main className="bg-white dark:bg-black min-h-screen">
          <ThemeColorCustom />

          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className=" flex flex-wrap justify-center relative overflow-hidden bg-red-400 w-full">
              <Navgation />
            </div>
            <div className="avatar-bg "></div>
            {children}
          </Row>
        </main>
      ) : (
        children
      )}
    </MainContextProvider>
  );
};

export default ThemLayout;
