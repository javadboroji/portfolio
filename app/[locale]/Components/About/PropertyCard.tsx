"use client"
import { Col, Row } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

function PropertyCard() {
     const t=useTranslations("AboutPage")
    const property=[
        {
            title:t("PropertyCardTitle"),
            value:'+12'
        },
        {
            title:t("PropertyCardTitle2"),
            value:'+4'
        },
        {
            title:t("PropertyCardTitle3"),
            value:'+2'
        },
        {
            title:t("PropertyCardTitle4"),
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