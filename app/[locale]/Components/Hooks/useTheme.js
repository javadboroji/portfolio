import { useState } from "react";

const useTheme=()=>{
    const [themeDark, setThemeDark] = useState(false);

    return {themeDark, setThemeDark}
}
export default useTheme