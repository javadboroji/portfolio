import React from 'react'
import Description from './Description'
import Avatar from './Avatar'
import { Row } from 'antd'

function HomeWrapper() {
  return (
    <div className='container'>
      <Row className='flex items-center'>
        <Description />
        <Avatar />
      </Row>
    </div>
  )
}

export default HomeWrapper
