import { Box, Container, Stack, Typography } from "@mui/material"
import Category from "../../components/Category/Category"
import { useEffect, useState } from "react"
import { Videos } from "../videos-page/Videos"
import { getVideosApi } from "../../services/getVideosApi"
export const MainPage = () => {
   const [videos, setVideos] = useState([])
   const [selectedCategory, setSelectedCategory] = useState("New")


      useEffect(() => {
         setVideos([])
         const fetchData = async () => {
            const data = await getVideosApi(selectedCategory)
            setVideos(data)
         }
         fetchData()
      }, [selectedCategory])

   return (
      <Stack>
         <Category setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
         <Box sx={{  height: "90vh" }}>
            {/* <Container  maxWidth={"sm"}> */}
               <Typography variant="h4" fontWeight={"bold"} mb={3}>
                  {selectedCategory} <span style={{ color: "#bc3908" }}>videos</span>
               </Typography>
               <Videos videos={videos} />
            {/* </Container> */}
         </Box>
      </Stack>
   )
}
