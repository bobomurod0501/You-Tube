import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader({ h = "80vh" }: { h?: string }) {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: h,
         }}
      >
         <CircularProgress />
      </Box>
   );
}
