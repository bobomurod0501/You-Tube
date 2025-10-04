import { Outlet } from "react-router"
import MainLayout from "../layouts/MainLayout"
export const Root = () => {
  return (
     <MainLayout>
      <Outlet/>
     </MainLayout>
  )
}
