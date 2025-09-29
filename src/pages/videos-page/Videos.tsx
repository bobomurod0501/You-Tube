import { Box, Stack } from "@mui/material"
import { VideCard } from "./card-page/VideCard"
// import { ChanellCard } from './channel-card/ChanellCard';
import Loader from "../../components/Loader/Loader";
interface VideoType {
  id?: {
    videoId?: string;
    channelId?: string;
  };
  title?: string;
  snippet?: {
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
export const Videos = ({videos}: {videos: VideoType[]}) => {
  if(!videos?.length){
    return <Loader/>
  }
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      {
        videos?.map((video: VideoType) => {
          return (
            <Box key={video?.id?.videoId as string} >
              <VideCard video={video} />
              {/* {video.id.channelId && <ChanellCard video={video} />} */}
            </Box>
          )
        })
      }
    </Stack>
  )
}
