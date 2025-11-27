import { Routes,Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import Crew from "./components/Crew"
import Ticket from "./components/Ticket"
import Service from "./components/Service"
import Button from "./components/Button"
import Taliwind from "./components/Taliwind"
import Events from "./components/Events"
import Stateprocess from "./components/TomAndJerry"
import Circle from "./components/circle"
import Pratices from "./components/pratices"
import Day_8 from "./components/Day_8"
import Props_Parent from "./components/Props_Parent"
import Props_Child from "./components/Props_Child"
import Day_10 from "./components/Day_10"
import Day_10_CollectionFrom from "./components/Day_10_CollectionFrom"


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
        <Route path="/button" element={<Button/>}/>
        <Route path="/tailwind" element={<Taliwind/>}/>
        <Route path="/event" element={<Events/>}/>
        <Route path="/state" element={<Stateprocess/>}/>
        <Route path="/circle" element={<Circle/>}/>
        <Route path="/paratice" element={<Pratices/>}/>
        <Route path="/day8" element={<Day_8/>} />
        <Route path="/parent" element={<Props_Parent/>}  />
        <Route path="/child" element={<Props_Child/>}/>
        <Route path="/day10" element={<Day_10/>}/>
        <Route path="/form" element={<Day_10_CollectionFrom/>}/>
      </Routes>
    
    </>
  )
}
export default App 