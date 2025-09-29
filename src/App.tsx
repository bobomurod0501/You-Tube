import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import MainLayout from "./layouts/MainLayout"
import { MainPage } from "./pages/main-page/MainPage"
import { SearchedVideos } from "./pages/search/SearchedVideos"
import { VideoDetail } from "./pages/video-detail/VideoDetail"
import { ChannelPage } from "./pages/channel/ChannelPage"

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
  return <RouterProvider router={router}/>
}

export default App
