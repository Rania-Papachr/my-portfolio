import * as React from "react";
import AppBar from "@mui/material/AppBar"; //The top navigation bar.
import Box from "@mui/material/Box"; // Its a div just with MUI superpowers. Use it for layout and spacing.
import CssBaseline from "@mui/material/CssBaseline"; //This resets and normalizes default browser styles. It makes the app look consistent in Chrome Firefox and Safari.
import Divider from "@mui/material/Divider"; //The thin horizontal line inside the mobile drawer.
import Drawer from "@mui/material/Drawer"; //The side menu that slides in on mobile when you click ☰.
import IconButton from "@mui/material/IconButton"; //It’s a button specifically designed for icons. Its the clickable button that holds the hamburger icon.
import List from "@mui/material/List"; // It's like <ul> in HTML.
import ListItem from "@mui/material/ListItem"; //like <li> in HTML.
import ListItemButton from "@mui/material/ListItemButton"; // Makes each list item clickable like a button. So instead of plain text, it behaves like a menu link.
import ListItemText from "@mui/material/ListItemText"; //This just displays the text inside each item.
import MenuIcon from "@mui/icons-material/Menu"; //This is the actual hamburger icon ☰ inside the button.
import Toolbar from "@mui/material/Toolbar"; //This is the inner container inside the AppBar. Almost always needed.
import Typography from "@mui/material/Typography"; //Instead of <h1>, <h2>, <p>.
import Button from "@mui/material/Button"; //The desktop menu buttons.

const drawerWidth = 240;
const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rania's Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#121212",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rania's Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#1de9b6",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default DrawerAppBar;
