import { Col, Row } from 'antd'
import React from 'react'

function PropertyCard() {
    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
                <div className='w-full flex flex-col items-center justify-center border  border-stone-500 h-40 dark:bg-black'>
                    <span className='text-yellow-500 text-5xl w-full p-4'>  12+</span>
                    <span className='dark:text-white text-2xl '>  پروژه انجام شده</span>
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <div className='w-full flex flex-col items-center justify-center border  border-stone-500 h-40 dark:bg-black'>
                    <span className='text-yellow-500 text-5xl w-full p-4'>  4+</span>
                    <span className='dark:text-white text-2xl '>  سال تجربه کار</span>
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <div className='w-full flex flex-col items-center justify-center border  border-stone-500 h-40 dark:bg-black'>
                    <span className='text-yellow-500 text-5xl w-full p-4'>  2+</span>
                    <span className='dark:text-white text-2xl '>  سال سابقه کار</span>
                </div>
            </Col>
            <Col xs={24} lg={12}>
                <div className='w-full flex flex-col items-center justify-center border  border-stone-500 h-40 dark:bg-black'>
                    <span className='text-yellow-500 text-5xl w-full p-4'>  3+</span>
                    <span className='dark:text-white text-2xl '>  پروژه های درحال انجام</span>
                </div>
            </Col>
        </Row>
    )
}

export default PropertyCard