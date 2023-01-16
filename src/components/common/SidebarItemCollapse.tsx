import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import sizeConfigs from "../../configs/sizeConfigs";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  const { appState } = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    if (appState.includes(item.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return (
    item.sidebarProps ? (
      <>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{
            "&: hover": {
              color: colorConfigs.sidebar.colorSB
            },
            paddingY: "15px",
            paddingX: "15px"
          }}
        >
          <ListItemIcon sx={{
            color: colorConfigs.sidebar.color,
            minWidth: sizeConfigs.sidebar.minW,
         
          }}>
            {item.sidebarProps.icon && item.sidebarProps.icon}
          </ListItemIcon>
          <ListItemText 
            disableTypography
            primary={
              <Typography sx={{         
                fontSize: sizeConfigs.sidebar.fontS,
              fontWeight: sizeConfigs.sidebar.fontW600,}}>
                {item.sidebarProps.displayText}
              </Typography>
            }
          />
          {open ? <ExpandMoreOutlinedIcon />:<ChevronLeftOutlinedIcon /> }
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List>
            {item.child?.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))}
          </List>
        </Collapse>
      </>
    ) : null
  );
};

export default SidebarItemCollapse;