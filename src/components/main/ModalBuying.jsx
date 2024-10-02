/* eslint-disable react/prop-types */
import { Close, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  Fade,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";
import { useGetProductByNameQuery } from "../../Redux/product";
import { useState } from "react";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 415,
      sm: 750,
      md: 1000,
      lg: 1280,
      xl: 1920,
      custom: 1440,
    },
  },
});

const ModalBuying = ({ handleClose, open, selectedProduct }) => {

  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useGetProductByNameQuery(
    "products?populate=*"
  );

  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <ThemeProvider theme={customTheme}>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90vw",
              maxWidth: { md: 1000, xxs: 350 },
              bgcolor: "#e3e2e2",
              borderRadius: "15px",
              boxShadow: 24,
              overflow: "hidden",
            }}
          >
            <Close
              onClick={handleClose}
              sx={{
                position: "absolute",
                fontSize: "28px",
                top: "10px",
                right: "15px",
                transition: "0.4s",
                borderRadius: "50%",
                color: "#000",
                p: "2px",
                ":hover": {
                  transition: "0.5s",
                  transform: "scale(1.1) rotate(90deg)",
                  cursor: "pointer",
                  bgcolor: "#e94a4a",
                  color: "#fff",
                },
              }}
            />
            <Grid container spacing={2}>
              <Grid size={{ xxs: 12, md: 5 }}>
                <Box display={"flex"}>
                  {selectedProduct.productImg &&
                  selectedProduct.productImg.length > 0 ? (
                    <img
                      style={{ width: "100%", objectFit: "cover" }}
                      src={`${import.meta.env.VITE_BASE_URL}${
                        selectedProduct.productImg[selectedImg]?.url
                      }`}
                      alt={`Image of ${selectedProduct.productTitle}`}
                    />
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No image available
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid
                size={{ xxs: 12, md: 7 }}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack
                  overflow={"auto"}
                  alignItems={{ xxs: "center", md: "start" }}
                >
                  <Typography
                    color="#000"
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                  >
                    {selectedProduct.productTitle}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h6"
                    color="error"
                  >
                    $ {selectedProduct.productPrice}
                  </Typography>
                  <Typography
                    textAlign={{ xxs: "center", md: "start" }}
                    variant="body1"
                    color="textSecondary"
                  >
                    {selectedProduct.productDescription}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"} gap={2} mt={2}>
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {selectedProduct &&
                      selectedProduct.productImg &&
                      selectedProduct.productImg.map((img, index) => (
                        <Box key={index}>
                          <Paper
                            sx={{
                              display: "flex",
                              width: "85px",
                              height: "95px",
                              borderRadius: "10px",
                              overflow: "hidden",
                              cursor: "pointer",
                            }}
                          >
                            <img
                              onClick={() => {
                                setSelectedImg(index);
                              }}
                              style={{
                                width: "100%",
                              }}
                              src={`${import.meta.env.VITE_BASE_URL}${img.url}`}
                              alt={`Product image ${index + 1}`}
                            />
                          </Paper>
                        </Box>
                      ))}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                    {/* //////////////////////////////////////////////////////////////// */}
                  </Stack>
                  <Button
                    sx={{
                      width: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      mt: 2,
                      mb: { xxs: 2, md: 0 },
                    }}
                    variant="contained"
                    color="primary"
                  >
                    <ShoppingCartOutlined
                      sx={{ fontSize: "18px", mr: "5px" }}
                    />
                    Buy Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
};

export default ModalBuying;

// {data && data.data && data.data.length > 0 ? (
//   data.data.map((el, index) => (
//     <Box key={index}>
//       <Paper
//         sx={{
//           display: "flex",
//           width: "85px",
//           height: "95px",
//           borderRadius: "10px",
//           overflow: "hidden",
//           cursor: "pointer",
//         }}
//       >
//         <img
//           style={{
//             width: "100%",
//           }}
//           src="/src/assets/1.jpg"
//           alt="img"
//         />
//       </Paper>
//     </Box>
//   ))
// ) : (
//   <Typography textAlign={"center"} variant="h6">
//     No products available
//   </Typography>
// )}
