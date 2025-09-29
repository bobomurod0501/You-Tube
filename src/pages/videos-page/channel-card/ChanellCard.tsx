import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

export const ChanellCard = ({ video }) => {
  console.log("vdeo", video);

  return (
    // <Link to={`/channel/${video?.id?.channelId}`}>
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      {/* <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          borderRadius: "50%",
          height: "180px",
          width: "180px",
          mb: 2,
          border: "1px solid #e3e3e3",
        }}
      /> */}
      <CardMedia
        >
        <img className="channelImage" src={video?.snippet?.thumbnails?.high?.url} alt="sdsdsd" />
      </CardMedia>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{display:"flex", alignItems:"center"}}>
          {video?.snippet?.title}{" "}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        {video.statistics?.subscriberCount && (
          <Typography>
            {parseInt(video.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "} Subscribers
          </Typography>
        )}
      </CardContent>
    </Box>
      // </Link>
  );
};
