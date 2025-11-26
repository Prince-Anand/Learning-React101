import { useState } from "react";
import { createContext } from "react";

export const ThemeContextData = createContext();
// console.log(ThemeContextData);
const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeContextData.Provider value={["Prince",theme,setTheme]}>
        {props.children}
      </ThemeContextData.Provider>
    </div>
  );
};
export default ThemeContext;
