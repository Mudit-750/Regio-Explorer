
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home.js'
import About from "./pages/About.js"
import Navbar from "./components/Navbar.js"
import Countries from "./pages/Countries.js"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/countries" element={<Countries/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default App
