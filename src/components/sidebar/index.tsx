import {
  Box,
  Drawer,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Theme,
} from "@mui/material";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import { Location } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  handleDrawerToggle: () => void;
  drawerWidth: number;
  handleNavigation: (path: string) => void;
  theme: Theme;
  location: Location;
  isMobile: boolean;
};

export const Sidebar = ({
  open,
  handleDrawerToggle,
  drawerWidth,
  handleNavigation,
  theme,
  location,
  isMobile,
}: SidebarProps) => {
  
  const menuItems = [
    { text: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  ];

  const drawerSidebar = (
    <Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? "white" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: open ? "block" : "none",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            top: 64, 
            height: "calc(100vh - 64px)", 
          },
        }}
      >
        {drawerSidebar}
      </Drawer>
    </>
  );
};
