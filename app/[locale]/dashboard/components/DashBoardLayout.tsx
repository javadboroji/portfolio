import React from "react";
import SidebarItems from "./SidebarItems";

function DashBoardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex h-full">
      {" "}
      <div className="w-[15rem] bg-[#023047] h-[100dvh] p-2">
        {" "}
        <SidebarItems />
      </div>{" "}
      <div className="flex flex-1 p-3"> {children} </div>{" "}
    </div>
  );
}

export default DashBoardLayout;
