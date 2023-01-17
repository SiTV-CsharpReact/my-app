import { ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&: hover": {
            color: colorConfigs.sidebar.colorSB
          },
           backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          paddingY: "15px",
          paddingX: "15px"
        }}
      >
        <ListItemIcon  sx={{
          color: colorConfigs.sidebar.color,
          minWidth: sizeConfigs.sidebar.minW,
 
        }}>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </ListItemIcon>
        <Typography sx={{         
            fontSize: sizeConfigs.sidebar.fontS,
          fontWeight: sizeConfigs.sidebar.fontW500,}}>
        {item.sidebarProps.displayText}
       
        </Typography>
      
      </ListItemButton>
    ) : null
  );
};

export default SidebarItem;