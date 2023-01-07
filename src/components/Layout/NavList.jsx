import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PieChartIcon from '@mui/icons-material/PieChart';
import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const NAVLIST_DATA = [
  { id: 1, link: "/", name: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, link: "/daily-reports", name: "Daily Reports", icon: <PieChartIcon /> },
  // { id: 3, link: "/banners", name: "Banners", icon: <ViewCarouselIcon /> },
  // { id: 4, link: "/testimonials", name: "Testimonials", icon: <FormatQuoteIcon /> },
  // { id: 5, link: "/about", name: "About", icon: <InfoIcon /> },
];

const NavList = ({ open }) => {
  const [show,setShow] = useState(false);
  const handleClick = () => setShow(!show)
  return (
    <List>
      {NAVLIST_DATA.slice(0,1).map(({ name, id, icon, link }, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to={link}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "0px",
                justifyContent: "center",
                transition: "0.4s",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={name}
              sx={{ transition: "0.4s", opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
     <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {show ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        
        {NAVLIST_DATA.slice(1).map(({ name, id, icon, link }, index) => (
        <ListItem key={index} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            to={link}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "0px",
                justifyContent: "center",
                transition: "0.4s",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={name}
              sx={{ transition: "0.4s", opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
        </List>
      </Collapse>
    </List>
  );
};

export default NavList;
