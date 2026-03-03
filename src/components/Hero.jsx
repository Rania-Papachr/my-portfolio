import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import avatar from "../assets/images/avatar-zoom.png";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "90vh",
        px: 3,
        backgroundColor: "#121212",
        color: "#fff",
      }}
    >
      <Avatar
        src={avatar}
        alt="Rania"
        sx={{ width: "200px", height: "200px", mr: 4 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Hi, I'm Rania - Junior Frontend Developer
        </Typography>
        <Typography variant="subtitle1">
          I love turning ideas into beautiful, functional websites.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1de9b6",
            color: "#121212",
            borderRadius: "6px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#4ef4c6" },
          }}
        >
          View My Work
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
