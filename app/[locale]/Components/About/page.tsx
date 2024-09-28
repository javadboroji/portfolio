"use client"
import { Col, Row } from 'antd'
import React, { useTransition } from 'react'
import PropertyCard from './PropertyCard'
import PersonalInfo from './PersonalInfo'
import Skils from './Skils'
import Eperince from './Eperince'
import { getLocale, getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

 function About() {
    
    const t=  useTranslations("AboutPage")
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-5xl dark:text-white text-center py-7'> {t("pageTitle")} <span className='text-yellow-500'> {t("MeTitle")}</span></h1>
            <div className='container mx-auto mt-10 flex flex-col justify-around'>
                <Row style={{ display: 'flex' }}>
                    <PersonalInfo />
                    <Col xs={24} lg={10}>
                        <PropertyCard />
                    </Col>
                </Row>
                <Row style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <span className='dark:text-white mx-auto mt-12 border-t dark:border-t-gray-400  text-center text-4xl py-4'> {t("mySkillsTitle")}</span>
                    <Skils />
                </Row>
                <Row style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <span className='dark:text-white mx-auto mt-12 border-t dark:border-t-gray-400  text-center text-4xl py-4 animate-bounce'> {t("BackgroundAndEducationTitle")}</span>
                    <Eperince />
                </Row>
            </div>

        </div>
    )
}

export default About