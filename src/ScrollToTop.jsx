import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: "30px" }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
