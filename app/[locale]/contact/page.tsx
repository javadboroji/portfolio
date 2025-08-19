import { Col, Flex, Row } from 'antd'
import React from 'react'
import { FaMap } from 'react-icons/fa'
import { FaSquarePhoneFlip } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { getLocale, getTranslations } from 'next-intl/server'

const contact = async () => {
  const t = await getTranslations("contact");
  const about = await getTranslations("AboutPage");
  const locale = await getLocale();
  console.log(locale, '*-*');

  return (
    <div className="container px-8 my-8">
      <span className="dark:text-white mx-auto mt-12 block  text-center text-4xl py-4">
        {" "}
        {t("contactPageTitle")} <span className="text-yellow-500"> {about("MeTitle")}</span>
      </span>
      <Row>
        <Col xs={24} lg={12}>
          <form className="my-8" dir={locale == "en" ? "ltr" : "rtl  "}>
            <Flex justify="space-between" className="flex-col lg:flex-row">
              <input
                dir={locale == "en" ? "ltr" : "rtl  "}
                name="Name"
                placeholder={t("inpNameplacholder")}
                className="w-full lg:w-[48%] rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
              />
              <input
                dir={locale == "en" ? "ltr" : "rtl  "}
                name="Email"
                placeholder={t("inpEmailPlacholder")}
                className=" w-full lg:w-[48%] rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
              />
            </Flex>
            <input
              name="ُSubject"
              placeholder={t("inpSubjectPlacholder")}
              className="w-full rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white  my-2"
            />
            <textarea
              name="Message"
              placeholder={t("inpMessagePlacholder")}
              className="w-full rounded-lg p-4 bg-transparent border border-slate-500 dark:text-white my-2"
            />
            <button
              type="submit"
              className="text-base dark:text-white bg-yellow-500 py-2 px-6 font-semibold rounded-full"
            >
              {t("contacFormButton")}
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
                <span className="text-sm text-gray-500 mb-2"> {t("addresTitle")}</span>
                <span className="mx-2 text-2xl dark:text-white">  {t("addresValue")}</span>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <span>
                <MdEmail fontSize={32} color={"#ffb400"} />
              </span>
              <div className="flex flex-col px-4">
                <span className="text-sm text-gray-500 mb-2"> {t("emailTitle")}</span>
                <span className="mx-2 text-2xl dark:text-white">
                  {" "}
                  {t("emailValue")}
                </span>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <span>
                <FaSquarePhoneFlip fontSize={32} color={"#ffb400"} />
              </span>
              <div className="flex flex-col px-4">
                <span className="text-sm text-gray-500 mb-2"> {t("phoneNummbertitle")} </span>
                <span className="mx-2 text-2xl dark:text-white">
                  {" "}
                  {t("phoneNumber")}
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