import { Col } from 'antd'
import React from 'react'

function PersonalInfo() {
    const aboutRes={
        name:'جواد',
        lastName:'بروجی',
        age:'27',
        country:'ایران',
        remoteWork:'بله',
        address:'تهران',
        phone:'09392409359',
        email:'javadboroji2222@gmail.com',
        socila:'_',
        language:'اینگلیسی'

    }
  return (
    <Col xs={24} lg={10}>
    <span className='text-3xl dark:text-white w-full block'> اطلاعات شخصی</span>
    <div className='flex flex-wrap mt-8'>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 text-xl mb-3 lg:mb-0  w-full lg:w-1/2'> نام: <span className='dark:text-white'> {aboutRes.name}</span></div>
            <div className='dark:text-gray-400  text-xl  w-full lg:w-1/2'> نام خانوادگی :<span className='dark:text-white'> {aboutRes.lastName}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400  mb-3 lg:mb-0 text-xl w-1/2'> سن :<span className='dark:text-white'> {aboutRes.age}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  کشور :<span className='dark:text-white'> {aboutRes.country}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 mb-3 lg:mb-0 text-xl w-1/2'> دورکاری :<span className='dark:text-white'> {aboutRes.remoteWork}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  آدرس :<span className='dark:text-white'> {aboutRes.address}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400  mb-3 lg:mb-0 text-xl w-1/2'> شماره تلفن :<span className='dark:text-white'> {aboutRes.phone}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  ایمیل :<span className='dark:text-white'> {aboutRes.email}</span></div>
        </div>
        <div className='flex-col lg:flex w-full mb-6'>
            <div className='dark:text-gray-400 mb-3 lg:mb-0  text-xl w-1/2'> اینستاگرام :<span className='dark:text-white'> {aboutRes.socila}</span></div>
            <div className='dark:text-gray-400  text-xl w-1/2'>  زبان ها :<span className='dark:text-white'> {aboutRes.language}</span></div>
        </div>
    </div>
</Col>
  )
}

export default PersonalInfo