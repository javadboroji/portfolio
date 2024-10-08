'use client'
import { Row } from "antd";
import Avatar from "./Components/Home/Avatar";
import Navgation from "./Components/Navgation";
import ThemeColor from "./Components/ThemeColorCustom";
import React, { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd';
import Description from "./Components/Home/Description";
import About from "./Components/About/page";
import Portfilo from "./Components/Portfolio/Portfilo";
import Contact from "./Components/Contact/Contact"
import HomeWrapper from "./Components/Home/HomeWrapper";
export default function Home() {
  const [themeDark, setThemeDark] = useState(false);
  const [activeItem, setActiveItem] = useState("home")
  useEffect(() => {
  }, [themeDark, activeItem])


  return (
    <ConfigProvider direction="rtl">
      <div className={`${themeDark ? 'dark' : 'light'}`}>
        <main className="bg-white dark:bg-black min-h-screen">
          <ThemeColor themeDark={themeDark} setThemeDark={setThemeDark} />
    
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <div className=" flex flex-wrap justify-center relative overflow-hidden bg-red-400 w-full">
            <Navgation setActiveItem={setActiveItem} activeItem={activeItem}  />
            
            </div>
            <div className="avatar-bg "></div>
            <div className="mt-32 lg:mt-8">
            {
              activeItem === 'home' ?
                <HomeWrapper />
                : activeItem === 'about' ?
                  <About />
                  : activeItem === 'portfolio' ?
                    <Portfilo />
                    : <Contact />
            }
            </div>
           
          </Row>
        </main>
      </div>
    </ConfigProvider>

  );
}
