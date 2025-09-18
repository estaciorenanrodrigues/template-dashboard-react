import { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import AppRoutes from "./routes";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "./components";

function App() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }else{
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Box sx={{ display: "flex", mt: 8 }}>
        <Box
          component="aside"
          sx={{
            width: open && !isMobile ? drawerWidth : "none",
            flexShrink: 0,
            position: "relative",
            zIndex: theme.zIndex.drawer,
          }}
        >
          <Sidebar
            open={open}
            handleDrawerToggle={handleDrawerToggle}
            handleNavigation={handleNavigation}
            theme={theme}
            location={location}
            drawerWidth={drawerWidth}
            isMobile={isMobile}
          />
        </Box>
        <Box
          component="section"
          sx={{
            flexGrow: 1,
            p: 3,
            width: "100%",
          }}
        >
          <AppRoutes />
        </Box>
      </Box>
    </>
  );
}

export default App;
