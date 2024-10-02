import { DarkMode, Facebook, Instagram, LightMode, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const Header1 = ({ setMode }) => {
  const theme = useTheme();
  const currantMode = theme.palette.mode;

  const socialIcons = [
    { icon: <Twitter />, label: "Twitter" },
    { icon: <Facebook />, label: "Facebook" },
    { icon: <Instagram />, label: "Instagram" },
  ];

  return (
    <Box sx={{ p: 2, bgcolor: "#3f4c63" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Box>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography
                sx={{
                  bgcolor: "red",
                  p: "3px 7px",
                  borderRadius: "10px",
                  fontSize: "11px",
                  mr: "10px",
                }}
                variant="h6"
                color="#fff"
              >
                HOT
              </Typography>
              <Typography
                sx={{ fontSize: "15px" }}
                variant="body1"
                color="#fff"
              >
                Free Express Shipping
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton
                aria-label="Dark Mode"
                onClick={() => {
                  localStorage.setItem(
                    "currantMode",
                    currantMode === "light" ? "dark" : "light"
                  );
                  setMode(currantMode === "light" ? "dark" : "light");
                }}
              >
                {currantMode === "light" ? (
                  <DarkMode sx={{ color: theme.palette.common.white }} />
                ) : (
                  <LightMode sx={{ color: theme.palette.common.white }} />
                )}
              </IconButton>
              {socialIcons.map((el, index) => (
                <IconButton key={index} aria-label={el.label}>
                  {React.cloneElement(el.icon, {
                    sx: { color: theme.palette.common.white },
                  })}
                </IconButton>
              ))}
            </Stack>
          </Box>
          
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
