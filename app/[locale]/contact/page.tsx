import { Col, Flex, Row } from 'antd'
import React from 'react'
import { FaMap } from 'react-icons/fa'
import { FaSquarePhoneFlip } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const contact=async()=> {
  return (
    <div className="container px-2 my-8">
    <span className="dark:text-white mx-auto mt-12 block  text-center text-4xl py-4">
      {" "}
      تماس با <span className="text-yellow-500"> من</span>
    </span>
    <Row>
      <Col xs={24} lg={12}>
        <form className="my-8">
          <Flex justify="space-between" className="flex-col lg:flex-row">
            <input
              name="Name"
              placeholder="نام"
              className="w-full lg:w-[48%] rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
            />
            <input
              name="Email"
              placeholder="ایمیل"
              className=" w-full lg:w-[48%] rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
            />
          </Flex>
          <input
            name="ُSubject"
            placeholder="موضوع"
            className="w-full rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white  my-2"
          />
          <textarea
            name="Message"
            placeholder="پیام"
            className="w-full rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
          />
          <button
            type="submit"
            className="text-base dark:text-white bg-yellow-500 py-2 px-6 font-semibold rounded-full"
          >
            {" "}
            ارسال پیام{" "}
          </button>
        </form>
      </Col>
      <Col xs={24} lg={12}>
        <div className="w-full flex flex-col py-4 my-8 justify-between items-start pr-4 h-1/2">
          <div className="flex items-start mb-4">
            <span>
              <FaMap fontSize={32} color={"#ffb400"} />
            </span>

            <div className="flex flex-col px-4">
              <span className="text-sm text-gray-500 mb-2"> آدرس</span>
              <span className="mx-2 text-2xl dark:text-white"> تهران</span>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <span>
              <MdEmail fontSize={32} color={"#ffb400"} />
            </span>
            <div className="flex flex-col px-4">
              <span className="text-sm text-gray-500 mb-2"> ایمیل</span>
              <span className="mx-2 text-2xl dark:text-white">
                {" "}
                javadboroji2222@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <span>
              <FaSquarePhoneFlip fontSize={32} color={"#ffb400"} />
            </span>
            <div className="flex flex-col px-4">
              <span className="text-sm text-gray-500 mb-2"> شماره تماس</span>
              <span className="mx-2 text-2xl dark:text-white">
                {" "}
                09392409359
              </span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
  )
}

export default contact