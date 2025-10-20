import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { sideBarItems } from '../../layouts/components/SideBarItems';
import { useNavigate } from 'react-router';
interface Props {
   drawerOpen:boolean;
   setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SideBarDrawer({ drawerOpen, setDrawerOpen }: Props) {
   const navigate = useNavigate()
   const handleItemClick = (text:string) => {
      if(text.toLowerCase() == "home"){
         navigate("/")
      }
   }
   const DrawerList = (
      <Box sx={{ width: 250, mt:"60px" }} role="presentation" onClick={() => setDrawerOpen(false)}>
         <List>
            {sideBarItems?.map((item, index) => (
               <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => handleItemClick(item.name)}>
                     <ListItemIcon>
                        {item.icon}
                     </ListItemIcon>
                     <ListItemText primary={item.name} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider />
         <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   return (
      <div>
         <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {DrawerList}
         </Drawer>
      </div>
   );
}
