import { Col, Flex, Row } from 'antd'
import React from 'react'
import rash from '@/public/rash.png';
import danghe from '@/public/dan.png'
import rasam from '@/public/rasam.png'
import movie from '@/public/movie.png'
import Image from 'next/image'
import Link from 'next/link';
export default function Portfilo() {
    const projects = [{
        img: rash,
        url: 'https://rash.manafund.ir',
        title: 'سایت فروش ویدیو راش'
    },
    {
        img: danghe,
        url: 'https://danzhefilm.com ',
        title: ' سایت چند زبانه دانژه'
    },
    {
        img: rasam,
        url: 'http://rasamflexo.com/ ',
        title: 'سایت شرکت رسام نقش آناهیتا'
    },
    {
        img: movie,
        url: 'https://movie-tmdb-type-script.vercel.app/ ',
        title: 'پروژه ویدیوهای IMDB'
    }
    ]
    return (
        <div className='lg:container'>
            <span className='dark:text-white mx-auto mt-12  w-full block text-center text-4xl py-4'> نمونه کار های من</span>
            <Row className='flex-col lg:flex-row' style={{ display: 'flex', margin: '4rem 0' }} gutter={[48, 48]}>
                {projects?.map((item, i) => (
                    <Col key={i} xs={24} lg={12} className='mb-4 lg:mb-0'>
                        <div className='relative overflow-hidden w-full h-full pt-[55%] animation-deley rounded-lg'>
                            <Link href={item.url}>
                                <Image fill src={item.img} alt={item.title} objectFit={'cover'} style={{ padding: '0' }} className='hover:scale-110 hover:blur-sm hover:animation-deley animation-deley' />

                            </Link>
                        </div>
                        <p className='text-sm lg:text-xl text-yellow-500  leading-9 relative z-50 '>{item.title}</p>
                    </Col>))}
            </Row>
        </div>
    )
}
