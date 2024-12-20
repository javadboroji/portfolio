import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";
import { MdDataExploration } from "react-icons/md";

const Eperince = async () => {
  const t = await getTranslations("AboutPage");
  return (
    <div className="flex py-8">
      <Row style={{ display: "flex" }} gutter={[24, 48]}>
        <Col xs={24} lg={24} >
          <div className="flex  items-center    lg:items-baseline">
            <div className=" p-2 bg-yellow-500 rounded-full experince-icon mx-2">
              <MdDataExploration color="#fff" fontSize={24} />
            </div>
            <div className="flex flex-col icon-befor">
              <span className="bg-slate-800 rounded-lg text-white p-2 w-fit mb-4">
                {t("experienceTime")}
              </span>
              <span className="dark:text-white mb-3">
                {" "}
                {t("experienceCompany")}
              </span>
              <span className="dark:text-white">
                {" "}
                {t("experienceJobPosition")}
              </span>
              <span className="block lg:max-w-[70%] leading-8">
                {t("experienceJobDescription")}
              </span>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={24}>
          <div className="flex items-center    lg:items-baseline">
            <div className="flex p-2 bg-yellow-500 rounded-full experince-icon mx-2">
              <MdDataExploration color="#fff" fontSize={24} />
            </div>
            <div className="flex flex-col icon-befor">
              <span className="bg-slate-800 rounded-lg text-white p-2 w-fit mb-4">
                {t("experienceTime2")}
              </span>
              <span className="dark:text-white mb-3">
                {" "}
                {t("experienceCompany2")}
              </span>
              <span className="dark:text-white"> {t("experienceTime2")} </span>
              <span className="block lg:max-w-[70%] leading-8">
                {t("experienceJobDescription2")}
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={24}>
          <div className="flex items-center    lg:items-baseline">
            <div className="flex p-2 bg-yellow-500 rounded-full experince-icon mx-2">
              <MdDataExploration color="#fff" fontSize={24} />
            </div>
            <div className="flex flex-col icon-befor">
              <span className="bg-slate-800 rounded-lg text-white p-2 w-fit mb-4">
                {" "}
                {t("educationTime")}
              </span>
              <span className="dark:text-white mb-3">
                {" "}
                {t("UniversityName")}
              </span>
              <span className="dark:text-white"> {t("fieldOfStudy")}</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Eperince;
