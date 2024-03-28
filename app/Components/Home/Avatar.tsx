'use clie'
import Image from 'next/image'
import React,{useEffect} from 'react'
import avatar from'@/public/avatar.jpg'
import { Col } from 'antd'
import AOS from "aos";
import "aos/dist/aos.css";
function Avatar() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Col xs={24} md={12} lg={8} >
      <div className='avatar-box' data-aos="zoom-out">
      <Image alt='avatar' src={avatar} fill/>
    </div>
    </Col>
  )
}

export default Avatar