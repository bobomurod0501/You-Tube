import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getVideosApi } from "../../services/getVideosApi"
import { Box, Container, Typography } from "@mui/material"
import { Videos } from "../videos-page/Videos"
import { NotFound } from "../../components/NotFoundPAge/NotFound"
interface VideoType {
   id: {
      videoId?: string;
      channelId?: string;
   };
   title: string;
   snippet: {
      channelId: string;
      publishedAt: string;
      title: string;
      description: string;
      channelTitle: string;
      thumbnails: {
         high: {
            url: string;
         };
      };
   };
}
export const SearchedVideos = () => {
   const {id} = useParams()
   const [searchedVideo, setSearchedVideo] = useState<VideoType[]>([])

   useEffect(() => {
      const fetchData = async() => {
         const data = await getVideosApi(id as string)
         console.log("data", data)
         if(data){
            setSearchedVideo(data)
         }
      }
      fetchData()
   }, [id])
   if(searchedVideo?.length === 0){
      return <NotFound/>
   }
  return (
    <Box p={2} sx={{height:"90vh"}}>
        <Container maxWidth={false} sx={{ maxWidth: "100%" }}>
         <Typography variant="h4" fontWeight={"bold"} mb={2}>
              Seach result for <span style={{ color:"#bc3908"}}>{id}</span> videos
         </Typography>
         <Videos videos={searchedVideo}/>
      </Container>
    </Box>
  )
}
