import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Rating,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { useGetProductByNameQuery } from "../../Redux/product";
import Grid from "@mui/material/Grid2";
import ModalBuying from "./ModalBuying";
import { ShoppingCartOutlined } from "@mui/icons-material";
import HeaderMainSection from "./HeaderMainSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xss: 470,
      xs: 450,
      sm: 750,
      md: 950,
      lg: 1280,
      xl: 1920,
      custom: 1440,
    },
  },
});

const allProductsAPI = "products?populate=*";
const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=men";
const womenCategoryAPI =
  "products?populate=*&filters[productCategory][$eq]=women";

const ContentMainSection = () => {
  const [myData, setMyData] = useState(allProductsAPI);
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useGetProductByNameQuery(myData);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <HeaderMainSection
          allProductsAPI={allProductsAPI}
          menCategoryAPI={menCategoryAPI}
          womenCategoryAPI={womenCategoryAPI}
          setMyData={setMyData}
          myData={myData}
        />
        <Box sx={{ mt: 5, mb: 15 }}>
          <Grid container spacing={{ xxs: 5, sm: 2 }} alignItems={"center"}>
            <AnimatePresence>
              {data && data.data && data.data.length > 0 ? (
                data.data.map((el, index) => (
                  <Grid key={index} size={{ xxs: 12, sm: 6, md: 4 }}>
                    <Card
                      component={motion.section}
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{
                        duration: 1.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      sx={{
                        maxWidth: "100%",
                        overflow: "hidden",
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "#ebebeb"
                            : "#bfbebe",
                        borderRadius: "15px",
                      }}
                    >
                      <Box sx={{ overflow: "hidden" }}>
                        <CardMedia
                          sx={{
                            height: { xxs: 360, xss: 600, sm: 370 },
                            transition: "0.3s",
                            ":hover": {
                              scale: "1.05",
                              rotate: "-2deg",
                              transition: "0.3s",
                            },
                          }}
                          image={`${import.meta.env.VITE_BASE_URL}${
                            el.productImg[0].url
                          }`}
                        />
                      </Box>
                      <CardContent>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                          mx={1}
                          mb={1}
                        >
                          <Typography
                            sx={{ fontWeight: "bold" }}
                            variant="h6"
                            component="h5"
                          >
                            {el.productTitle}
                          </Typography>
                          <Typography
                            sx={{ fontWeight: "bold" }}
                            variant="body1"
                            component="span"
                          >
                            $ {el.productPrice}
                          </Typography>
                        </Stack>
                        <Typography
                          mx={1}
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          {el.productDescription}
                        </Typography>
                      </CardContent>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        mx={2}
                        mb={1}
                      >
                        <Box>
                          <Button
                            onClick={() => {
                              handleOpen();
                              setSelectedProduct(el);
                            }}
                            sx={{ fontWeight: "bold" }}
                            size="large"
                          >
                            <ShoppingCartOutlined
                              sx={{ fontSize: "18px", mr: "5px" }}
                            />
                            BUY NOW
                          </Button>
                        </Box>
                        <Box>
                          <Rating
                            name="half-rating-read"
                           value={el.productRating}
                            precision={0.5}
                            readOnly
                          />
                        </Box>
                      </Stack>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography textAlign={"center"} variant="h6">
                  No products available
                </Typography>
              )}
            </AnimatePresence>
          </Grid>
        </Box>
      </Container>
      <ThemeProvider theme={customTheme}>
        <ModalBuying
          handleClose={handleClose}
          open={open}
          selectedProduct={selectedProduct}
        />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default ContentMainSection;
