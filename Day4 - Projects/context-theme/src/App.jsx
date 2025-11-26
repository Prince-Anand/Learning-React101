import { useContext } from "react"

import Check from "./Check.jsx"
import { ThemeContextData } from "./context/ThemeContext.jsx"


export const App = () => {

  const [data,theme,setTheme] = useContext(ThemeContextData)
  return (
    <div>
      <main className={theme}>
      <Check/>
      Hi
      <button onClick={()=>{
        if (theme === 'dark') setTheme('light')
        else
        setTheme('dark')
      }}>change</button>
      </main>
    </div>
  )
}
export default App;