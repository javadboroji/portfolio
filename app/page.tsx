'use client'
import { Row } from "antd";
import Avatar from "./Components/Home/Avatar";
import Navgation from "./Components/Navgation";
import ThemeColor from "./Components/ThemeColorCustom";
import React, { useEffect, useState } from 'react'
import Description from "./Components/Home/Description";
import { ConfigProvider } from 'antd';

export default function Home() {
  const [themeDark, setThemeDark] = useState(false);
  useEffect(() => {
  }, [themeDark])


  return (
    <ConfigProvider direction="rtl">
      <div className={`${themeDark ? 'dark' : 'light'}`}>
        <main className="bg-white dark:bg-black min-h-screen">
          <ThemeColor themeDark={themeDark} setThemeDark={setThemeDark} />
          
          <Row style={{ display: 'flex' ,justifyContent:'center'}}>
            <Navgation />
            <div className="avatar-bg"></div>
            <Description />
            <Avatar />
          </Row>
        </main>
      </div>
    </ConfigProvider>

  );
}
