import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import './sidebar.scss';
import { GiHamburgerMenu} from 'react-icons/Gi';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
const Sidebar = () => {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
  
    arrow[i]?.addEventListener("click", (e)=>{
   const target = e.target as HTMLInputElement;
   let arrowParent = target.parentElement?.parentElement ;//selecting main parent of arrow
   arrowParent?.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn?.addEventListener("click", ()=>{
    sidebar?.classList.toggle("close");
  });
  return (
    <>
   <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{  backgroundColor:colorConfigs.sidebar.colorSB}}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
           
            
          >
           
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
    </>
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: sizeConfigs.sidebar.width,
    //     flexShrink: 0,
    //     "& .MuiDrawer-paper": {
    //       width: sizeConfigs.sidebar.width,
    //       boxSizing: "border-box",
    //       borderRight: "0px",
    //       backgroundColor: colorConfigs.sidebar.bg,
    //       color: colorConfigs.sidebar.color
    //     }
    //   }}
    // >
    //   <List disablePadding>
    //     <Toolbar sx={{  backgroundColor:colorConfigs.sidebar.colorSB}}>
    //       <Stack
    //         sx={{ width: "100%" }}
    //         direction="row"
           
            
    //       >
           
    //       </Stack>
    //     </Toolbar>
    //     {appRoutes.map((route, index) => (
    //       route.sidebarProps ? (
    //         route.child ? (
    //           <SidebarItemCollapse item={route} key={index} />
    //         ) : (
    //           <SidebarItem item={route} key={index} />
    //         )
    //       ) : null
    //     ))}
    //   </List>
    // </Drawer>
  );
};

export default Sidebar;