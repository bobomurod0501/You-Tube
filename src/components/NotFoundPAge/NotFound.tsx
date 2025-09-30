import { Box, Typography } from "@mui/material"

export const NotFound = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"80vh"}>
      <Typography variant="h4" fontWeight={"bold"} mb={2}>
        404 - Not Found
      </Typography>
    </Box>
  )
}
