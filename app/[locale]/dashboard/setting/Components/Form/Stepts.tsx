"use client";
import React, { useState } from "react";
import { Steps } from "antd";
import { Button } from "@/components/ui/button";

const steptsItems = [
  {
    title: "اطلاعات پروفایل",
  },
  {
    title: "سوابق کاری",
  },
  {
    title: "پروژه ها",
  },
];
function Stepts() {
  const [current, setCurrent] = useState(0);

  const changeSteps = (type: string) => {
    if (type === "prev") {
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    } else {
      setCurrent((prev) => (steptsItems.length === prev ? prev : prev + 1));
    }
  };
  return (
    <div className="p-4">
      <Steps className="py-3" current={current} items={steptsItems} />
      <div className="flex justify-between">
        <Button onClick={() => changeSteps("prev")} size={"sm"}>
          {" "}
          قبلی
        </Button>
        <Button
          onClick={() => changeSteps("next")}
          size={"sm"}
          className="mx-2"
        >
          {" "}
          بعدی
        </Button>
      </div>
    </div>
  );
}

export default Stepts;
