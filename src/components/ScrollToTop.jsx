import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={show}>
      <Fab
        onClick={handleClick}
        size="medium"
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 32 },
          right: { xs: 16, sm: 32 },

          // responsive size
          width: { xs: 40, sm: 56 },
          height: { xs: 40, sm: 56 },

          bgcolor: "primary.main",
          color: "#000",
          boxShadow: 3,

          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
