import { getLocale } from "next-intl/server";
import Link from "next/link";
import React, { ReactNode } from "react";
import UserInfoSidebar from "./UserInfoSidebar";
import { MdOutlineMenuOpen } from "react-icons/md";

type linkType = {
  link: string;
  title: string;
  icon?: ReactNode;
};
async function SidebarItems() {
  const local = await getLocale();
  const items: linkType[] = [
    {
      link: `/${local}/dashboard/setting`,
      title: local === "fa" ? "تنظیمات" : "ُSetting",
    },
    {
      link: `/${local}/dashboard/skils`,
      title: local === "fa" ? "مهارت ها" : "Skils",
    },
    {
      link: `/${local}/dashboard/experiences`,
      title: local === "fa" ? "تجربه ها" : "Experiences",
    },
  ];
  return (
    <div className="flex flex-col justify-center relative">
        <button className="absolute top-0 left-0">
            <MdOutlineMenuOpen color="#ffffff" size={24}/>
        </button>
      <span>
        <UserInfoSidebar />
      </span>
      <ul className="p-0 h-full">
        {items?.map((item,i) => {
          return (
            <li key={i} className="p-2 my-4">
              <Link href={item.link} className="text-[#e5e5e5] font-medium">
                {item.title}
              </Link>
            </li>
          );
        })}
        <li className="flex-end">
          {" "}
          <Link href={"/"} className="text-[#e5e5e5] font-medium">
            {local === "fa" ? "خروج" : "Logout"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarItems;
