import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#3f4c63", textAlign: "center" }}>
      <Typography sx={{ py: 2 }} variant="h5" color="#fff">
        Design and developed by
        <span
          style={{
            fontWeight: "bolder",
            color: "rgb(196 64 64)",
            marginLeft: "10px",
            marginRight: "15px",
          }}
        >
          Hesham Ali
        </span>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
