import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import MainLayout from "./layouts/MainLayout"
import { MainPage } from "./pages/main-page/MainPage"
import { SearchedVideos } from "./pages/search/SearchedVideos"
import { VideoDetail } from "./pages/video-detail/VideoDetail"
import { ChannelPage } from "./pages/channel/ChannelPage"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { useMemo } from "react"
import { useThemeContext } from "./contexts/ThemeContext"

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<MainPage/>
      },
      {
        path:"search",
        element:<Outlet/>,
        children:[
          {
            path:":id",
            element:<SearchedVideos/>
          }
        ]
      },
      {
        path:"video",
        element:<Outlet/>,
        children:[
          {
            path:":videoId",
            element:<VideoDetail/>
          }
        ]
      },
      {
        path:"channel",
        element:<Outlet/>,
        children:[
          {
            path:":channelId",
            element:<ChannelPage/>
          }
        ]
      }
    ]
  }
])
const App = () => {
  const {mode} = useThemeContext()
  const theme = useMemo(() => createTheme({
    palette:{
      mode,
    }
  }), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
