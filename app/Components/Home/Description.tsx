
import { Col } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

function Description() {
  const t = useTranslations("HomePage");
  
  return (
    <Col xs={22} lg={12}>
      <div className="flex flex-col items-center flex-col mx-4">
        <p className="text-yellow-500 font-bold text-3xl text-right w-full  mb-4">
          {" "}
          {t("userName")}
        </p>
        <p className=" dark:text-white text-black font-bold text-2xl text-right w-full mb-4 ">
            {t("jobPosition")}
        </p>
        <p className=" dark:text-white text-black font-medium text-base text-right leading-9 ml-4 ">
            {t("description")}
          <br />{" "}
          <span className="font-bold w-full">
            {" "}
            {t("educationTitle")}
          </span>
          <br />
          {t("educationDescription")}
          <br />
          <span className="font-bold">{t("learningTitle")} </span>
          <br />
          {t("learningDescription")}
          <br /> <span className="font-bold"> {t("workExperienceTitle")}</span>
          <br />
          {t("workExperienceDescription1")}
          <br></br>
          {t("workExperienceDescription2")}
        </p>
      </div>
    </Col>
  );
}

export default Description;
