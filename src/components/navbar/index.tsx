import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

type NavbarProps = {
  handleDrawerToggle: () => void;
};

export const Navbar = ({ handleDrawerToggle }: NavbarProps) => {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100vw",
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard React
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
