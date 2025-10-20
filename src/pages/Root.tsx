import { Navigate, Outlet } from "react-router"
import MainLayout from "../layouts/MainLayout"
import { useAuthContext } from "../contexts/authContext";
export const Root = () => {
  const {isAuth} = useAuthContext()
  return (
    <>
      {!isAuth && <Navigate replace to="/auth/login" />}
      {isAuth && (
        <Navigate replace to="/" />
      )}
     <MainLayout>
      <Outlet/>
     </MainLayout>
    </>
  )
}
