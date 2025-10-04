import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import { MainPage } from "./pages/main-page/MainPage"
import { SearchedVideos } from "./pages/search/SearchedVideos"
import { VideoDetail } from "./pages/video-detail/VideoDetail"
import { ChannelPage } from "./pages/channel/ChannelPage"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { useMemo } from "react"
import { useThemeContext } from "./contexts/ThemeContext"
import { Root } from "./pages/Root"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
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
      primary: {
        main: '#ff5252',
      },
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
