"use client"
import React, { ReactNode } from "react";
import ThemeColorCustom from "./Components/ThemeColorCustom";
import { Row } from "antd";
import Navgation from "./Components/Navgation";
import { MainContextProvider } from "./context/MainContext";

const ThemLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainContextProvider>
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
    </MainContextProvider>
  );
};

export default ThemLayout;
