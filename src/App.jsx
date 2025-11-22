import { Routes,Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import Crew from "./components/Crew"
import Ticket from "./components/Ticket"
import Service from "./components/Service"
const App =()=>{
  return (
    <>
    {/* Route */}
        <NavBar/>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path="/about" element={<Crew/>}/>
        <Route path="/product" element={<Ticket/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    
    </>
  )
}
export default App 