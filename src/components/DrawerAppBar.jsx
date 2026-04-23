import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material"; //The top navigation bar.
import MenuIcon from "@mui/icons-material/Menu"; //This is the actual hamburger icon ☰ inside the button.
import Logo from "./Logo";

const drawerWidth = 160;
const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        //getBoundingClientRect() gives you the position and size of the element you selected, relative to what you currently see on the screen.
        //so rect is an object with positions like: {top:.., right,bottom:.. , left:.., width etc}
        //position relative to the visible viewport

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id); //set the section with this id active .
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "right", px: 2 }}>
      <Typography variant="h6" sx={{ my: 2, textAlign: "right" }}>
        Rania's Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "right",
                justifyContent: "flex-end",
                color:
                  activeSection === item.toLowerCase()
                    ? "primary.main"
                    : "text.primary",
              }}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              gap: 1,
            }}
          >
            <Logo />
            <Typography variant="subtitle1" fontWeight="500" sx={{ ml: 3 }}>
              Rania's Portfolio
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => scrollToSection(item.toLowerCase())}
                key={item}
                sx={{
                  color:
                    activeSection === item.toLowerCase()
                      ? "primary.main"
                      : "text.primary",
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
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
              px: 2,
              pt: 2,
              borderLeft: "1px solid rgba(255,255,255,0.08)",
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
