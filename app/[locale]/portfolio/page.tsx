import React from "react";
import rash from "../../../public/rash.jpg";
import danghe from "../../../public/dan.jpg";
import rasam from "../../../public/rasam.jpg";
import movie from "../../../public/movie.jpg";
import erp from "../../../public/erp.jpg";
import shop from "../../../public/shop.jpg";
import babak from "../../../public/babak.jpg";

import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Col, Row } from "antd";
const portfolio = async () => {
  const t = await getTranslations("Projects");
  const projects = [
    {
      img: rash,
      url: "https://rash.manafund.ir",
      title: t("rash"),
    },
    {
      img: danghe,
      url: "https://danzhefilm.com ",
      title: t("danzhe"),
    },
    {
      img: rasam,
      url: "http://rasamflexo.com/ ",
      title: t("rasam"),
    },
    {
      img: movie,
      url: "https://movie-tmdb-type-script.vercel.app/ ",
      title: t("Imdb"),
    },
    {
      img: erp,
      url: "http://rasamflexo.ir/ ",
      title: t("erp"),
    },
    {
      img: shop,
      url: "https://shop-co-dun.vercel.app/",
      title: t("shop"),
    },
    {
      img: babak,
      url: "http://babak-mfg.ir/en",
      title: t("babak"),
    },
  ];
  return (
    <div className="lg:container">
      <span className="dark:text-white mx-auto mt-12  w-full block text-center text-4xl py-4">
        {" "}
        نمونه کار های من
      </span>
      <Row
        className="flex-col lg:flex-row"
        style={{ display: "flex", margin: "4rem 0" }}
        gutter={[48, 48]}
      >
        {projects?.map((item, i) => (
          <Col key={i} xs={24} lg={12} className="mb-4 lg:mb-0">
            <div className="relative overflow-hidden w-full h-full pt-[55%] animation-deley rounded-lg">
              <Link href={item.url}>
                <Image
                  fill
                  src={item.img}
                  alt={item.title}
                  objectFit={"cover"}
                  style={{ padding: "0" }}
                  className="hover:scale-110 hover:blur-sm hover:animation-deley animation-deley"
                />
              </Link>
            </div>
            <p className="text-sm lg:text-xl text-yellow-500  leading-9 relative z-50 ">
              {item.title}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default portfolio;
