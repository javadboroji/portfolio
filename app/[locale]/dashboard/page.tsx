import React from "react";
import SidebarItems from "./components/SidebarItems";
import TinyCom from "../Components/Tiny/TinyCom";

function page() {
  return (
    <div className="flex h-full">
      <div className=" w-[15rem] bg-[#023047] h-[100dvh] p-2">
        {" "}
        <SidebarItems />
      </div>
      <div className="flex flex-1 p-3"> <TinyCom/></div>
    </div>
  );
}

export default page;
