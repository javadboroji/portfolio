'use client'
import React,{useEffect} from 'react'
import { Col, Flex, Progress } from 'antd';
import AOS from "aos";
function Skils() {
    const skils = [
        {
            name: 'Html',
            value: 100
        },
        {
            name: 'Css',
            value: 100
        },
        {
            name: 'Javascript',
            value: 80
        },
        {
            name: 'Bootstrap',
            value: 100
        },
        {
            name: 'Jquery',
            value: 90
        },
        {
            name: 'React',
            value: 90
        },{
            name:'Next',
            value:60
        },{
            name:'Ant',
            value:50
        },
        {
            name:'Typescript',
            value:50
        },
        {
            name:'Matial ui',
            value:70
        },
        {
            name:'Tailwind',
            value:50
        }
    ]
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    
    return (
        <Flex wrap="wrap" gap="small" className='justify-center lg:justify-start'>
            {skils.map((item,i)=>{
                return(

            <Col data-aos="flip-up" key={i} xs={12} lg={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Progress strokeColor={'#ffb400'} type="circle" percent={item.value} size={75} status='normal' format={(percent) => <span className='dark:text-white'>{percent}%</span>} />
                <span className='text-yellow-500 text-2xl py-8'> {item.name}</span>
            </Col>
                )
            })}
         

        </Flex>
    )
}

export default Skils