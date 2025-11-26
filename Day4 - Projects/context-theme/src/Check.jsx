import {useContext} from 'react'
import {ThemeContextData} from './context/ThemeContext.jsx'

const Check = () => {
     const [data] = useContext(ThemeContextData);
     console.log(data);
  return (
    <div>
        {data}
    </div>
  )
}

export default Check;