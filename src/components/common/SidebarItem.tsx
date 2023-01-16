import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
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