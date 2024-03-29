import { Col, Row } from 'antd'
import React from 'react'
import PropertyCard from './PropertyCard'
import PersonalInfo from './PersonalInfo'
import Skils from './Skils'

function About() {

    return (
        <div className='flex flex-col w-10/12'>
            <h1 className='text-5xl dark:text-white text-center py-7'> درباره <span className='text-yellow-500'> من</span></h1>
            <div className='container mx-auto mt-10 flex flex-col justify-around'>
                <Row style={{ display: 'flex' }}>
                    <PersonalInfo />
                    <Col xs={24} lg={10}>
                        <PropertyCard />
                    </Col>
                </Row>
                <Row style={{display:'flex',width:'100%', flexDirection:'column'}}>
                    <span className='dark:text-white mx-auto mt-12 border-t dark:border-t-gray-400  text-center text-4xl py-4'> مهارت  های من</span>
                    <Skils/>
                </Row>
                <Row style={{display:'flex',width:'100%', flexDirection:'column'}}>
                    <span className='dark:text-white mx-auto mt-12 border-t dark:border-t-gray-400  text-center text-4xl py-4'> سوابق وتحصیلات</span>
                </Row>
            </div>

        </div>
    )
}

export default About