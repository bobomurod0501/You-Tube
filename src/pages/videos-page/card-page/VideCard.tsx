import { CheckCircle } from "@mui/icons-material"
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import moment from "moment"
import { Link } from "react-router"
import noImage from "../../../images/no-image.jpg"

export const VideCard = ({ video }) => {
   return (
      <Card sx={{ width: "320px", boxShadow: "none", borderRadius:0}}>
         <Link to={`/video/${video?.id?.videoId}`}>
            <CardMedia
               component="img"
               height={"180px"}
               width={"360px"}
               image={video?.snippet?.thumbnails?.high?.url ?? noImage}
               alt="Paella dish"
            />
         </Link>
         <CardContent sx={{ height: "200px", position: "relative"}}>
            <Link to={`video/${video?.id?.videoId}`}>
               <Typography sx={{ opacity: "0.4", listStyle:"none", fontSize:"12px" }}>
                  {moment(video?.snippet.publishedAt).fromNow()}
               </Typography>
               <Typography variant="subtitle1" fontWeight={"bold"} className="videTitle">
                  {video?.snippet.title}
               </Typography>
               <Typography variant="subtitle2" sx={{ opacity: "0.6" }} className="videoDescription">
                  {video?.snippet?.description.length ? video?.snippet?.description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime reiciendis cum quaerat itaque dolor accusamus sunt laudantium inventore possimus eligendi veritatis a repellat asperiores suscipit eum voluptatem provident, fugit saepe aut veniam nulla deserunt ex in commodi. Maiores ab dolores modi nam et, blanditiis, sequi, neque inventore nesciunt voluptatem eaque?"}
               </Typography>
            </Link>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
               <Stack direction={"row"} alignItems={"center"} gap={2} mt={2} >
                  <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                  <Typography variant="subtitle2" color="gray">
                     {video?.snippet.channelTitle}
                     <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
               </Stack>
            </Link>
         </CardContent>
      </Card>
   )
}
