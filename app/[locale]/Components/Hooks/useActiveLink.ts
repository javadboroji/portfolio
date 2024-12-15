import { useState } from "react";

const useActiveLink = () => {
  const [activeItem, setActiveItem] = useState("home");
  return { activeItem, setActiveItem };
};
export default useActiveLink;
