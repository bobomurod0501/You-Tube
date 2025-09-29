import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getChannelDetails } from "../../services/getChannelDetails";
import { getChannelVideos } from "../../services/getChannelVideos";
import { Box, Container } from "@mui/material";
import { ChanellCard } from "../videos-page/channel-card/ChanellCard";
import { Videos } from "../videos-page/Videos";
import channelLogo from "../../images/Screenshot 2025-09-29 at 16.10.03.png";

export const ChannelPage = () => {
  const [channelVideos, setChannelVideos] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);
  const { channelId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const channelDetailsData = await getChannelDetails(channelId);
      setChannelDetails(channelDetailsData[0]);
      const channelVideos = await getChannelVideos(channelId);
      setChannelVideos(channelVideos);
    };
    fetchData();
  }, [channelId]);
  console.log(channelDetails)
  return (
    <Box minHeight={"95vh"} mt={"10vh"}>
      <Box>
           <Box
              sx={{
                 width: "100%",
                 height: "300px",
                 position: "relative",
                 zIndex:-1
              }}
           >
              <img
                 src={channelDetails?.brandingSettings?.image?.bannerExternalUrl ?? channelLogo}
                 alt="channel banner"
                 referrerPolicy="no-referrer"
                 style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                 }}
              />
           </Box>
        <Box sx={{ marginTop: "-100px" }}>
          <ChanellCard video={channelDetails} />
        </Box>
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={channelVideos} />
      </Container>
    </Box>
  );
};
