import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import { Suspense } from "react"
import Loader from "../components/Loader/Loader"


const MainLayout = () => {
   return (
      <div>
         <Navbar />
         <ScrollRestoration />
         <Suspense fallback={<Loader/>}>
            <Outlet/>
         </Suspense>
      </div>
   )
}

export default MainLayout
