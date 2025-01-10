import React from "react";
import SidebarItems from "./components/SidebarItems";
import TinyCom from "../Components/Tiny/TinyCom";
import DashBoardLayout from "./components/DashBoardLayout";

function page() {
  return (
    <DashBoardLayout>
      <TinyCom/>
    </DashBoardLayout>
  );
}

export default page;
