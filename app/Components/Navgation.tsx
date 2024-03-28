'use client'
import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
function Navgation() {
  const [navgationHover, setNavgationHover] = useState("");

  const hoverItem = (id: string) => {
    setNavgationHover(id)
  }
  const clearState = () => {
    setNavgationHover("")
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [navgationHover])

  return (
    <div className='flex items-start flex-col fixed top-[30%] z-10 right-8'>
      <div onMouseEnter={() => hoverItem('home')} onMouseLeave={clearState} className=' flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        <FaHome fontSize={21} color='#fff' />
        {navgationHover === 'home' ? <span data-aos={navgationHover === 'home' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> خانه</span> : ''}

      </div>

      <div onMouseEnter={() => hoverItem('about')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        <FaUser fontSize={21} color='#fff' />
        {navgationHover === 'about' ? <span data-aos={navgationHover === 'about' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> درباره من </span> : ''}

      </div>

      <div onMouseEnter={() => hoverItem('portfolio')} onMouseLeave={clearState} className=' flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        <BsBagFill fontSize={21} color='#fff' />
        {navgationHover === 'portfolio' ? <span data-aos={navgationHover === 'portfolio' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'>  گالری من </span> : ''}


      </div>

      <div onMouseEnter={() => hoverItem('contact')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        <MdEmail fontSize={21} color='#fff' />
        {navgationHover === 'contact' ? <span data-aos={navgationHover === 'contact' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'>   تماس با من </span> : ''}


      </div>

      <div onMouseEnter={() => hoverItem('blog')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        <IoChatbubbles fontSize={21} color='#fff' />
        {navgationHover === 'blog' ? <span data-aos={navgationHover === 'blog' ? "fade-left" : ''} className='font-medium text-base text-white mr-6'> وبلاگ </span> : ''}


      </div>

    </div>
  )
}

export default Navgation