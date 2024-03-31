import { Col, Row } from 'antd'
import React from 'react'

function PropertyCard() {
    const property=[
        {
            title:'پروژه انجام شده',
            value:'+12'
        },
        {
            title:'سال تجربه کار',
            value:'+4'
        },
        {
            title:'سال سابقه کار',
            value:'+2'
        },
        {
            title:'پروژه های درحال انجام',
            value:'+3'
        }
    ]
    return (
        <Row gutter={[24, 24]}>
           {property?.map((item,i)=>(
             <Col xs={24} lg={12} key={i}>
             <div className='w-full flex flex-col items-center justify-center border rounded-lg border-stone-500 h-40 hover:scale-105 hover:animation-deley animation-deley dark:bg-black'>
                 <span className='text-yellow-500 text-5xl w-full p-4'>{item.value}</span>
                 <span className='dark:text-white text-2xl '>  {item.title}</span>
             </div>
         </Col>
           ))}
   
        </Row>
    )
}

export default PropertyCard