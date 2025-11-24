import "./App.css"
import Card from "./components/Card.jsx"
import { Navbar } from "./components/Navbar.jsx"
const card = () => {
  return (
    <div>
      <Navbar/>
      <Navbar/>
      <Navbar/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
export default card;