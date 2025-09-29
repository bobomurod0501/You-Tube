import { Box, Stack } from "@mui/material"
import { VideCard } from "./card-page/VideCard"
// import { ChanellCard } from './channel-card/ChanellCard';
import Loader from "../../components/Loader/Loader";

export const Videos = ({videos}) => {
  if(!videos?.length){
    return <Loader/>
  }
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      {
        videos?.map((video) => {
          return (
            <Box key={video.id.videoId} >
              <VideCard video={video} />
              {/* {video.id.channelId && <ChanellCard video={video} />} */}
            </Box>
          )
        })
      }
    </Stack>
  )
}
