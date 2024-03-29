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
        <div className='flex w-full mb-6'>
            <span className='dark:text-gray-400 text-xl w-1/2'> نام: <span className='dark:text-white'> {aboutRes.name}</span></span>
            <span className='dark:text-gray-400  text-xl w-1/2'> نام خانوادگی :<span className='dark:text-white'> {aboutRes.lastName}</span></span>
        </div>
        <div className='flex w-full mb-6'>
            <span className='dark:text-gray-400  text-xl w-1/2'> سن :<span className='dark:text-white'> {aboutRes.age}</span></span>
            <span className='dark:text-gray-400  text-xl w-1/2'>  کشور :<span className='dark:text-white'> {aboutRes.country}</span></span>
        </div>
        <div className='flex w-full mb-6'>
            <span className='dark:text-gray-400  text-xl w-1/2'> دورکاری :<span className='dark:text-white'> {aboutRes.remoteWork}</span></span>
            <span className='dark:text-gray-400  text-xl w-1/2'>  آدرس :<span className='dark:text-white'> {aboutRes.address}</span></span>
        </div>
        <div className='flex w-full mb-6'>
            <span className='dark:text-gray-400  text-xl w-1/2'> شماره تلفن :<span className='dark:text-white'> {aboutRes.phone}</span></span>
            <span className='dark:text-gray-400  text-xl w-1/2'>  ایمیل :<span className='dark:text-white'> {aboutRes.email}</span></span>
        </div>
        <div className='flex w-full mb-6'>
            <span className='dark:text-gray-400  text-xl w-1/2'> اینستاگرام :<span className='dark:text-white'> {aboutRes.socila}</span></span>
            <span className='dark:text-gray-400  text-xl w-1/2'>  زبان ها :<span className='dark:text-white'> {aboutRes.language}</span></span>
        </div>
    </div>
</Col>
  )
}

export default PersonalInfo