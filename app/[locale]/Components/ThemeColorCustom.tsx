'use client'
import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import LanSelect from './LanSelect/LanSelect';

interface themeProps{
  themeDark: boolean;
  setThemeDark: React.Dispatch<React.SetStateAction<boolean>>;
}
const ThemeColorCustom: React.FC<themeProps>=({themeDark,setThemeDark})=> {

  //frist app render check them mode and set defult mod
  useEffect(() => {
    const themeMod = localStorage.getItem('themeMod');
    if (!themeMod) {
      localStorage.setItem('themeMod', 'dark');
      setThemeDark(true)
    } else if (themeMod === 'dark') {
      setThemeDark(true)
    }
  }, []);


  //change theme mode
  const themChangeHandler = () => {
    const themeMod = localStorage.getItem('themeMod');
    if (themeMod === 'dark') {
      localStorage.setItem('themeMod', 'light');
      setThemeDark(false)
    } else {
      localStorage.setItem('themeMod', 'dark');
      setThemeDark(true)
    }
  }

  return (
    <div className='relative'>
      <div className="fixed lg:top-8 top-3 right-0 lg:right-8 z-50 flex">
      <button onClick={themChangeHandler}>
        {themeDark ? <FaSun fontSize={'24'} color='#fff' /> : <FaMoon fontSize={'24'} />}
      </button>
      <LanSelect />
    </div>
    </div>
  )
}

export default ThemeColorCustom