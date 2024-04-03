import { Col } from 'antd'
import React from 'react'

function Description() {
    return (
        <Col xs={22} lg={12} >
           <div className='flex flex-col items-center flex-col mx-4'>
           <p className='text-yellow-500 font-bold text-3xl text-right w-full  mb-4'> من جواد بروجی هستم</p>
            <p className=' dark:text-white text-black font-bold text-2xl text-right w-full mb-4 '> برنامه نویس فرانت</p>
            <p  className=' dark:text-white text-black font-medium text-base text-right leading-9 ml-4 '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان .</p>
           </div>
        </Col>
    )
}

export default Description