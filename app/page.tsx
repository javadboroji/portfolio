'use client'
import { Row } from "antd";
import Avatar from "./Components/Home/Avatar";
import Navgation from "./Components/Navgation";
import ThemeColor from "./Components/ThemeColorCustom";
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [themeDark, setThemeDark] = useState(false);
  useEffect(() => {
  }, [themeDark])


  return (
    <div className={`${themeDark ? 'dark' : 'light'}`}>
      <main className="bg-white dark:bg-black min-h-screen">
        <ThemeColor themeDark={themeDark} setThemeDark={setThemeDark} />
        <Row>
          <Navgation />
          <div className="avatar-bg"></div>
          <Avatar />
        </Row>
      </main>
    </div>
  );
}
