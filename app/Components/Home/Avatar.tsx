import Image from 'next/image'
import React from 'react'
import avatar from'@/public/avatar.jpg'
import { Col } from 'antd'
function Avatar() {
  return (
    <Col xs={24} md={12} lg={8} >
      <div className='avatar-box'>
      <Image alt='avatar' src={avatar} fill/>
    </div>
    </Col>
  )
}

export default Avatar