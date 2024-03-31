'use client'
import { Row } from "antd";
import Avatar from "./Components/Home/Avatar";
import Navgation from "./Components/Navgation";
import ThemeColor from "./Components/ThemeColorCustom";
import React, { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd';
import Description from "./Components/Home/Description";
import About from "./Components/About/About";
import Portfilo from "./Components/Portfolio/Portfilo";
import Contact from"./Components/Contact/Contact"
export default function Home() {
  const [themeDark, setThemeDark] = useState(false);
  const [activeItem, setActiveItem] = useState("home")
  useEffect(() => {
    console.log(activeItem);

  }, [themeDark, activeItem])


  return (
    <ConfigProvider direction="rtl">
      <div className={`${themeDark ? 'dark' : 'light'}`}>
        <main className="bg-white dark:bg-black min-h-screen">
          <ThemeColor themeDark={themeDark} setThemeDark={setThemeDark} />

          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Navgation setActiveItem={setActiveItem} activeItem={activeItem} />
            <div className="avatar-bg"></div>

            {
              activeItem === 'home' ?
                <>
                  <Description />
                  <Avatar />
                </> : activeItem === 'about' ?
                  <About />
                  : activeItem === 'portfolio' ?
                  <Portfilo/>
                  :<Contact/>
            }
          </Row>
        </main>
      </div>
    </ConfigProvider>

  );
}
