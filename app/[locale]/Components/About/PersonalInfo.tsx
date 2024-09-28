"use client"
import { Col } from 'antd'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import React from 'react'

 function PersonalInfo() {
    const t=  useTranslations("AboutPage")
    const aboutRes={
        name:t("userName"),
        lastName:t("lastName"),
        age:t("age"),
        country:t("country"),
        remoteWork:t("remoteWork"),
        address:t("address"),
        phone:t("phone"),
        email:t("email"),
        socila:t("socila"),
        language:t("language")

    }
  return (
    <Col xs={24} lg={10}>
    <span className='text-3xl dark:text-white w-full block'> {t("PersonalInformationTitle")}</span>
    <div className='flex flex-wrap mt-8'>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 text-xl mb-3 lg:mb-0  w-full lg:w-1/2'> {t("firstNameTitle")}: <span className='dark:text-white'> {aboutRes.name}</span></div>
            <div className='dark:text-gray-400  text-xl  w-full lg:w-1/2'>  {t("lastNameTitle")} :<span className='dark:text-white'> {aboutRes.lastName}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400  mb-3 lg:mb-0 text-xl w-1/2'> {t("ageTitle")} :<span className='dark:text-white'> {aboutRes.age}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  {t("countryTitle")} :<span className='dark:text-white'> {aboutRes.country}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 mb-3 lg:mb-0 text-xl w-1/2'> {t("remoteWorkTitle")} :<span className='dark:text-white'> {aboutRes.remoteWork}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  {t("addresTitle")} :<span className='dark:text-white'> {aboutRes.address}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400  mb-3 lg:mb-0 text-xl w-1/2'> {t("phoneTitle")} :<span className='dark:text-white'> {aboutRes.phone}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  {t("emailTitle")} :<span className='dark:text-white'> {aboutRes.email}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 mb-3 lg:mb-0  text-xl w-1/2'> {t("linkedinTitle")} :<span className='dark:text-white'> {aboutRes.socila}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'> {t("linkedinTitle")}:<span className='dark:text-white'> {aboutRes.language}</span></div>
        </div>
    </div>
</Col>
  )
}

export default PersonalInfo