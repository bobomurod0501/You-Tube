import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getVideosApi } from "../../services/getVideosApi"
import { Box, Container, Typography } from "@mui/material"
import { Videos } from "../videos-page/Videos"
export const SearchedVideos = () => {
   const {id} = useParams()
   const [searchedVideo, setSearchedVideo] = useState()

   useEffect(() => {
      const fetchData = async() => {
         const data = await getVideosApi(id)
         setSearchedVideo(data)
      }
      fetchData()
   }, [id])
  return (
    <Box p={2} sx={{height:"90vh"}}>
      <Container maxWidth={"90%"}>
         <Typography variant="h4" fontWeight={"bold"} mb={2}>
              Seach result for <span style={{ color:"#bc3908"}}>{id}</span> videos
         </Typography>
         <Videos videos={searchedVideo}/>
      </Container>
    </Box>
  )
}
