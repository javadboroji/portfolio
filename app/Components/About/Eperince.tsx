import { Col, Row } from 'antd';
import React from 'react'
import { MdDataExploration } from "react-icons/md";

function Eperince() {
    return (
        <div className='flex py-8'>
            <Row style={{ display: 'flex' }} gutter={[24,48]}>
                <Col xs={24} lg={12}>
                    <div className='flex items-baseline'>
                        <div className='flex p-2 bg-yellow-500 rounded-full experince-icon mx-2'><MdDataExploration color='#fff' fontSize={24} /></div>
                        <div className='flex flex-col icon-befor'>
                            <span className='bg-slate-800 rounded-lg text-white p-2 w-fit mb-4'> 8ماه</span>
                            <span className='dark:text-white mb-3'>  شرکت نرم افزاری آکام</span>
                            <span className='dark:text-white'>  برنامه نویس فرانت اند</span>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className='flex items-baseline'>
                        <div className='flex p-2 bg-yellow-500 rounded-full experince-icon mx-2'><MdDataExploration color='#fff' fontSize={24} /></div>
                        <div className='flex flex-col icon-befor'>
                            <span className='bg-slate-800 rounded-lg text-white p-2 w-fit mb-4'> 1395-1399</span>
                            <span className='dark:text-white mb-3'> دانشگاه صدرالمتاالهین</span>
                            <span className='dark:text-white'> کارشناسی مهندسی کامپیوتر-نرم افزار</span>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className='flex items-baseline'>
                        <div className='flex p-2 bg-yellow-500 rounded-full experince-icon mx-2'><MdDataExploration color='#fff' fontSize={24} /></div>
                        <div className='flex flex-col icon-befor'>
                            <span className='bg-slate-800 rounded-lg text-white p-2 w-fit mb-4'> از شهریور 1401 تا اکنون</span>
                            <span className='dark:text-white mb-3'>  شرکت رسام نقش آناهیتا</span>
                            <span className='dark:text-white'>  برنامه نویس فرانت اند</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Eperince