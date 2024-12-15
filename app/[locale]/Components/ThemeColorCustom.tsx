"use client";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import LanSelect from "./LanSelect/LanSelect";
import { useMainContext } from "../context/MainContext";

const ThemeColorCustom = () => {
  const { themeDark, setThemeDark } = useMainContext();
  //frist app render check them mode and set defult mod
  useEffect(() => {
    const themeMod = localStorage.getItem("themeMod");
    if (!themeMod) {
      localStorage.setItem("themeMod", "dark");
      setThemeDark(true);
    } else if (themeMod === "dark") {
      setThemeDark(true);
    }
  }, []);

  useEffect(() => {
    if (themeDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [themeDark]);

  //change theme mode
  const themChangeHandler = () => {
    const themeMod = localStorage.getItem("themeMod");
    if (themeMod === "dark") {
      localStorage.setItem("themeMod", "light");
      setThemeDark(false);
    } else {
      localStorage.setItem("themeMod", "dark");
      setThemeDark(true);
    }
  };

  return (
    <div className="fixed lg:top-8 top-3 right-0 lg:right-8 z-50 flex">
      <button onClick={themChangeHandler}>
        {themeDark ? (
          <FaSun fontSize={"24"} color="#fff" />
        ) : (
          <FaMoon fontSize={"24"} />
        )}
      </button>
      <LanSelect />
    </div>
  );
};

export default ThemeColorCustom;
