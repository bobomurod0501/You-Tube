import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchBar from "../searchBar/SearchBar";
import { Link, useLocation } from "react-router";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../contexts/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = ({ setOpen, open, drawerOpen, setDrawerOpen }: Props) => {
  const { mode, setMode } = useThemeContext();
  const { pathname } = useLocation();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const {setIsAuth} = useAuthContext()
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (item:string) => {
    setAnchorElUser(null);
    if(item.toLowerCase() == "logout"){
      signOut(auth).then(() => {
        setIsAuth(false)
        localStorage.removeItem("access_token")
        // Sign-out successful.
      }).catch(() => {
        // An error happened.
      });
    }
  };

  const isVideoPage = pathname.startsWith("/video/");

  const handleDrawer = () => {
    if (isVideoPage) {
      setDrawerOpen(!drawerOpen);
    } else {
      setOpen(!open);
    }
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"20px"}
      sx={{
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 99,
        background: mode == "dark" ? "#001219" : "#fefcfd",
        height: "60px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={3}>
        <Typography
          onClick={() => handleDrawer()}
          sx={{ cursor: "pointer" }}
          color="text.primary"
        >
          <MenuIcon />
        </Typography>

        {/* <img src={Logo} alt="Logo" height={"30px"} width={"40px"} /> */}
        <Link to={"/"}>
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
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: mode == "dark" ? "#fff" : "",
                fontFamily: "Roboto Condensed",
              }}
            >
              YouTube
            </span>
          </Box>
        </Link>
      </Stack>

      <SearchBar />
      <Stack direction={"row"} alignItems={"center"}>

        <IconButton onClick={() => setMode(mode == "dark" ? "light" : "dark")}>
          {mode == "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{width:"30px", height:"30px"}}/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
