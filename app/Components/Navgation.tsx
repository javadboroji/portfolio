'use client'
import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoChatbubbles } from "react-icons/io5";

function Navgation() {
  const [navgationHover, setNavgationHover] = useState("");

  const hoverItem = (id: string) => {
    setNavgationHover(id)
  }
  const clearState = () => {
    setNavgationHover("")
  }
  useEffect(() => {

  }, [navgationHover])

  return (
    <div className='flex items-end flex-col fixed top-[30%] right-8'>
      <div onMouseEnter={() => hoverItem('home')} onMouseLeave={clearState} className=' flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        {navgationHover === 'home' ? <span className='font-medium text-base text-white mr-6'> خانه</span> : ''}
        <FaHome fontSize={21} color='#fff' />
      </div>

      <div onMouseEnter={() => hoverItem('about')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        {navgationHover === 'about' ? <span className='font-medium text-base text-white mr-6'> درباره من </span> : ''}
        <FaUser fontSize={21} color='#fff' />
      </div>

      <div onMouseEnter={() => hoverItem('portfolio')} onMouseLeave={clearState} className=' flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        {navgationHover === 'portfolio' ? <span className='font-medium text-base text-white mr-6'>  گالری من </span> : ''}
        <BsBagFill fontSize={21} color='#fff' />

      </div>

      <div onMouseEnter={() => hoverItem('contact')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        {navgationHover === 'contact' ? <span className='font-medium text-base text-white mr-6'>   تماس با من </span> : ''}

        <MdEmail fontSize={21} color='#fff' />
      </div>

      <div onMouseEnter={() => hoverItem('blog')} onMouseLeave={clearState} className='flex items-center p-4 rounded-full bg-zinc-900 hover:bg-yellow-500 mb-3'>
        {navgationHover === 'blog' ? <span className='font-medium text-base text-white mr-6'> وبلاگ </span> : ''}

        <IoChatbubbles fontSize={21} color='#fff' />
      </div>

    </div>
  )
}

export default Navgation