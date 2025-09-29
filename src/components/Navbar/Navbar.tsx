import { Box, Stack } from "@mui/material"
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../images/logo.png"
import { Link } from "react-router";

const Navbar = () => {
  return (
     <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} sx={{ position: "sticky", top: 0, zIndex: 99, background:"#edede9"}}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo" height={"30px"} width={"40px"} />
      </Link>
        <SearchBar />
        <Box/>
    </Stack>
  )
}

export default Navbar
