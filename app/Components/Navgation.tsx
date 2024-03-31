'use client'
import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from 'antd';

interface NavgationProps {
  activeItem:string,
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}
const Navgation: React.FC<NavgationProps> = ({ setActiveItem ,activeItem}) => {

  const [navgationHover, setNavgationHover] = useState("");

  const hoverItem = (id: string) => {
    setNavgationHover(id)
  }
  const clearState = () => {
    setNavgationHover("")
  }

  const changeActiveNav = (name: string) => {
    setActiveItem(name)
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [navgationHover])

  return (
    <div className='flex items-start flex-col fixed top-[30%] z-10 right-8'>
      <div onMouseEnter={() => hoverItem('home')} onMouseLeave={clearState}  className={` flex items-center p-4 rounded-full ${activeItem==='home'?'bg-yellow-500':'bg-zinc-900'} hover:bg-yellow-500 mb-3`}>
        <button onClick={() => changeActiveNav('home')}> <FaHome fontSize={21} color='#fff' /></button>
        {navgationHover === 'home' ? <span data-aos={navgationHover === 'home' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> خانه</span> : ''}

      </div>

      <div onMouseEnter={() => hoverItem('about')} onMouseLeave={clearState} className={`flex items-center p-4 rounded-full ${activeItem==='about'?'bg-yellow-500':'bg-zinc-900'} hover:bg-yellow-500 mb-3`}>
        <button onClick={() => changeActiveNav('about')}>  <FaUser fontSize={21} color='#fff' /></button>
        {navgationHover === 'about' ? <span data-aos={navgationHover === 'about' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> درباره من </span> : ''}

      </div>

      <div onMouseEnter={() => hoverItem('portfolio')} onMouseLeave={clearState} className={` flex items-center p-4 rounded-full ${activeItem==='portfolio'?'bg-yellow-500':'bg-zinc-900'} hover:bg-yellow-500 mb-3`}>
        <button onClick={() => changeActiveNav('portfolio')}>    <BsBagFill fontSize={21} color='#fff' /></button>
        {navgationHover === 'portfolio' ? <span data-aos={navgationHover === 'portfolio' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'>  نمونه کارهای  من </span> : ''}


      </div>

      <div onMouseEnter={() => hoverItem('contact')} onMouseLeave={clearState} className={`flex items-center p-4 rounded-full ${activeItem==='contact'?'bg-yellow-500':'bg-zinc-900'} hover:bg-yellow-500 mb-3`}>
        <button onClick={() => changeActiveNav('contact')}>  <MdEmail fontSize={21} color='#fff' /></button>
        {navgationHover === 'contact' ? <span data-aos={navgationHover === 'contact' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'>   تماس با من </span> : ''}


      </div>

      <div onMouseEnter={() => hoverItem('blog')} onMouseLeave={clearState} className={`flex items-center p-4 rounded-full ${activeItem==='blog'?'bg-yellow-500':'bg-zinc-900'} hover:bg-yellow-500 mb-3`}>
        <button onClick={() => changeActiveNav('blog')}>   <IoChatbubbles fontSize={21} color='#fff' /></button>
        {navgationHover === 'blog' ? <span data-aos={navgationHover === 'blog' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> وبلاگ </span> : ''}


      </div>

    </div>
  )
}

export default Navgation