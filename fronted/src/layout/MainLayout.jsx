import { Outlet } from "react-router-dom"
import Navbar from "../components/Headers/Navbar"

const MainLayout = () => {
  return (
    <main className="dark:bg-black overflow-hidden">
    <Navbar/>
        <Outlet/> 
    <footer>Footer</footer>
    </main>
  )
}

export default MainLayout
