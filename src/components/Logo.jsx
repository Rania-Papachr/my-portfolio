import { Typography, Box } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "2rem",
          color: "white",
        }}
      >
        R
      </Typography>

      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "2rem",
          color: "#1de9b6",
          position: "absolute",
          top: 0,
          left: 14,
          opacity: 0.9,
        }}
      >
        P
      </Typography>
    </Box>
  );
};

export default Logo;
