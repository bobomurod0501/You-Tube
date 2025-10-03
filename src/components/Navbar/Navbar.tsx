import { Box, IconButton, Stack } from "@mui/material"
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const {mode, setMode} = useThemeContext()
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} sx={{ position: "sticky", top: 0, zIndex: 99, background: mode == "dark" ? "#001219" : "#f5f5f273"}}>
      <Link to={"/"}>
        {/* <img src={Logo} alt="Logo" height={"30px"} width={"40px"} /> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="28"
            viewBox="0 0 40 28"
          >
            <path
              fill="red"
              d="M39.6 5.2s-.4-2.8-1.6-4C36.4 0 34.8 0 34 0 28.4.4 20 0 20 0s-8.4.4-14 .8c-.8 0-2.4 0-4 1.2-1.2 1.2-1.6 4-1.6 4S0 8.4 0 11.6v4.8c0 3.2.4 6.4.4 6.4s.4 2.8 1.6 4c1.6 1.2 3.6 1.2 4.4 1.2 5.6.4 14 .8 14 .8s8.4 0 14-.8c.8 0 2.4 0 4-1.2 1.2-1.2 1.6-4 1.6-4s.4-3.2.4-6.4v-4.8c0-3.2-.4-6.4-.4-6.4Z"
            />
            <path fill="#fff" d="M16 8v12l10-6z" />
          </svg>
          <span style={{ fontWeight: "bold", fontSize: "20px", color: mode == "dark" ? "#fff" : "", fontFamily: "Roboto Condensed" }}>YouTube</span>
        </Box>
      </Link>
        <SearchBar />
        <Box>
          <IconButton onClick={() => setMode(mode == "dark" ? "light" : "dark")}>
            {mode == "light" ? <WbSunnyIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Box>
    </Stack>
  )
}

export default Navbar
