"use client";
import React, { useEffect, useState, useTransition } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

interface NavgationProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}
const Navgation: React.FC<NavgationProps> = ({ setActiveItem, activeItem }) => {
  const [navgationHover, setNavgationHover] = useState("");
  const t = useTranslations("Navgiate");
  const local = useLocale();
  const hoverItem = (id: string) => {
    setNavgationHover(id);
  };
  const clearState = () => {
    setNavgationHover("");
  };

  const changeActiveNav = (name: string) => {
    setActiveItem(name);
  };
  useEffect(() => {}, [navgationHover]);

  return (
    <div
      className={`flex items-start lg:flex-col fixed top-[5%] lg:top-[30%] z-10 right-auto  left-auto  ${
        local === "fa" ? "lg:right-8" : "lg:left-8"
      }`}
    >
      <div
        onMouseEnter={() => hoverItem("home")}
        onMouseLeave={clearState}
        className={` flex items-center p-4 rounded-full ${
          activeItem === "home" ? "bg-yellow-500" : "bg-zinc-900"
        } hover:bg-yellow-500 mx-2 lg:mx-0 lg:mb-3`}
      >
        <button onClick={() => changeActiveNav("home")}>
          {" "}
          <FaHome fontSize={21} color="#fff" />
        </button>
        {navgationHover === "home" ? (
          <span
            data-aos={navgationHover === "home" ? "fade-left" : ""}
            className={`font-medium hidden lg:block text-base text-white  ${
              local === "fa" ? "mr-6" : "ml-6"
            } `}
          >
            {t("navHome")}
          </span>
        ) : (
          ""
        )}
      </div>

      <div
        onMouseEnter={() => hoverItem("about")}
        onMouseLeave={clearState}
        className={`flex items-center p-4 rounded-full ${
          activeItem === "about" ? "bg-yellow-500" : "bg-zinc-900"
        } hover:bg-yellow-500  mx-2 lg:mx-0 lg:mb-3`}
      >
        <button onClick={() => changeActiveNav("about")}>
          {" "}
          <FaUser fontSize={21} color="#fff" />
        </button>
        {navgationHover === "about" ? (
          <span
            data-aos={navgationHover === "about" ? "fade-left" : ""}
            className={`font-medium hidden lg:block text-base text-white  ${
              local === "fa" ? "mr-6" : "ml-6"
            } `}
          >
            {t("navAbout")}
          </span>
        ) : (
          ""
        )}
      </div>

      <div
        onMouseEnter={() => hoverItem("portfolio")}
        onMouseLeave={clearState}
        className={` flex items-center p-4 rounded-full ${
          activeItem === "portfolio" ? "bg-yellow-500" : "bg-zinc-900"
        } hover:bg-yellow-500 mx-2 lg:mx-0 lg:mb-3`}
      >
        <button onClick={() => changeActiveNav("portfolio")}>
          {" "}
          <BsBagFill fontSize={21} color="#fff" />
        </button>
        {navgationHover === "portfolio" ? (
          <span
            data-aos={navgationHover === "portfolio" ? "fade-left" : ""}
            className={`font-medium hidden lg:block text-base text-white  ${
              local === "fa" ? "mr-6" : "ml-6"
            } `}
          >
            {t("navExamples")}
          </span>
        ) : (
          ""
        )}
      </div>

      <div
        onMouseEnter={() => hoverItem("contact")}
        onMouseLeave={clearState}
        className={`flex items-center p-4 rounded-full ${
          activeItem === "contact" ? "bg-yellow-500" : "bg-zinc-900"
        } hover:bg-yellow-500 mx-2 lg:mx-0 lg:mb-3`}
      >
        <button onClick={() => changeActiveNav("contact")}>
          {" "}
          <MdEmail fontSize={21} color="#fff" />
        </button>
        {navgationHover === "contact" ? (
          <span
            data-aos={navgationHover === "contact" ? "fade-left" : ""}
            className={`font-medium hidden lg:block text-base text-white  ${
              local === "fa" ? "mr-6" : "ml-6"
            } `}
          >
            {t("navContact")}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navgation;
