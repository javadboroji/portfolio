"use client";
import React from "react";
import { Select, Space } from "antd";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

function LanSelect() {
  const locale = useLocale();
  const router = useRouter();
  const path = usePathname();
  const handleChange = (label: string) => {
    localStorage.setItem("language", label);
    const pathList = path.split("/");
    const newUrl = pathList.map((path, index) => (index === 1 ? label : path));
    const newPath = newUrl.join("/");
    router.replace(`${process.env.NEXT_PUBLIC_BASE_URL_client}/${newPath}`);
  };

  return (
    <>
      <Select
        defaultValue={locale}
        className="bg-transparent mx-4"
        style={{ backgroundColor: "transparent" }}
        //loading
        onChange={handleChange}
        options={[
          { value: "fa", label: "fa" },
          { value: "en", label: "en" },
        ]}
      />
    </>
  );
}

export default LanSelect;
