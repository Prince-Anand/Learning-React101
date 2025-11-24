import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  const countBy5 = () => {
    setCount(count+5);
  }
  return (
    <div className="parent">
        <div className="counter">
          {count}
        </div>
        <div className="btn">
        <button onClick={()=>{
          setCount(count + 1);
        }}>Increase</button>
        <button onClick={()=>{
          setCount(count - 1);
        }}>Decrease</button>
        <button onClick={countBy5}>
          Increase by 5
        </button>
        </div>
    </div>
  )
};
export default Counter;