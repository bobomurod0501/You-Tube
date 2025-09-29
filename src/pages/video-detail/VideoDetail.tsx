import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getVideoDetailsApi } from "../../services/getVideoDetails";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from 'react-player'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";
import Linkify from 'react-linkify';
import { getSuggestedVideo } from "../../services/getSuggestedVideo";
import { Videos } from "../videos-page/Videos";

interface VideoDetailtype {
   snippet?:{
      description:string,
      tags:string[],
      title:string,
      channelId:string,
      channelTitle:string,
      thumbnails:{
         default:{
            url:string
         }
      }
   },
   statistics?:{
      viewCount:string,
      likeCount:string,
      commentCount:string,
   }
}
export const VideoDetail = () => {
   const [videoDetails, setVideoDetails] = useState<VideoDetailtype>({});
   const [suggestedVideoData, setSuggestedVideoData] = useState([])
   const [expanded, setExpanded] = useState(false);
   const { videoId } = useParams();
   useEffect(() => {
      const fetchData = async () => {
         const data = await getVideoDetailsApi(videoId as string);
         const seggestedVideoData = await getSuggestedVideo(videoId as string)
         setVideoDetails(data[0]);
         setSuggestedVideoData(seggestedVideoData)
      };
      fetchData();
   }, [videoId]);

   const desc = Boolean(videoDetails?.snippet?.description.length)

   // const {
   //    snippet: { title, channelId, channelTitle, description, tags, thumbnails },
   //    statistics: { viewCount, likeCount, commentCount },
   // } = videoDetails;

   return (
      <Box height={"90vh"} mb={10}>
         <Box display={"flex"} gap={3} p={5} sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box width={"75%"} >
               <ReactPlayer src={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls />
               <Stack flexDirection={"row"} flexWrap={"wrap"} gap={1} mt={1}>
               {
                  videoDetails?.snippet?.tags?.map((item, inx) => {
                     return (
                        <Chip
                           label={item}
                           variant="outlined"
                           key={inx}
                           deleteIcon={<Tag />}
                           onDelete={() => { }}
                        />
                     )
                  })
               }
                  </Stack>
               <Typography variant="h5" fontWeight={"bold"} py={2}>
                  {videoDetails?.snippet?.title}
               </Typography>
               <Typography variant="subtitle2" sx={{ opacity: "0.7" }} className={`${expanded ? "" : "descriptionText"}`}>
                  <Linkify
                     componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a
                           href={decoratedHref}
                           key={key}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{ color: "blue", textDecoration: "underline" }}
                        >
                           {decoratedText}
                        </a>
                     )}
                  >
                     {videoDetails?.snippet?.description.length ? videoDetails?.snippet?.description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime reiciendis cum quaerat itaque dolor accusamus sunt laudantium inventore possimus eligendi veritatis a repellat asperiores suscipit eum voluptatem provident, fugit saepe aut veniam nulla deserunt ex in commodi. Maiores ab dolores modi nam et, blanditiis, sequi, neque inventore nesciunt voluptatem eaque?"}
                  </Linkify>
               </Typography>
               {
                  desc && (
                     <Typography onClick={() => setExpanded(!expanded)} sx={{ fontSize: "14px", color: "blue", cursor: "pointer" }}>{expanded ? "show less" : "show more"}</Typography>
                  )
               }

               <Stack direction={"row"} alignItems={"center"} gap={"20px"} py={1} >
                  <Stack sx={{ opacity: 0.7 }} gap={"3px"} direction={"row"} alignItems={"center"}>
                     <Visibility />
                     {parseInt(videoDetails?.statistics?.viewCount as string).toLocaleString()} views
                  </Stack>
                  <Stack sx={{ opacity: 0.7 }} gap={"3px"} direction={"row"} alignItems={"center"}>
                     <FavoriteOutlined />
                     {parseInt(videoDetails?.statistics?.likeCount as string).toLocaleString()} likes
                  </Stack>
                  <Stack sx={{ opacity: 0.7 }} gap={"3px"} direction={"row"} alignItems={"center"}>
                     <MarkChatRead />
                     {parseInt(videoDetails?.statistics?.commentCount as string).toLocaleString()} comments
                  </Stack>
               </Stack>
               <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
               <Stack direction={"row"} alignItems={"center"} gap={"5px"} mt={"5px"}>
                  <Avatar src={videoDetails?.snippet?.thumbnails?.default?.url} />
                  <Typography variant="subtitle2" color="gray">
                     {videoDetails?.snippet?.channelTitle}
                     <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
               </Stack>
               </Link>
            </Box>
            <Box width={"25%"} >
               <Box sx={{ overflowY: "scroll", height: "100vh", width:"100%" }}>
                  <Videos videos={suggestedVideoData} />
               </Box>
            </Box>
         </Box>
      </Box>
   );
};
