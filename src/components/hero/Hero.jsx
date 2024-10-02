import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 900,
      lg: 1280,
      xl: 1920,
      custom: 1440,
    },
  },
});

const swiperSlider = [
  { title: "MEN", img: "./src/components/banner-15.jpg" },
  { title: "WOMEN", img: "./src/components/banner-25.jpg" },
];

const Hero = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid
              sx={{ height: "480px", boxShadow: 1 }}
              size={{ xs: 12, md: 9 }}
            >
              <Swiper
                grabCursor={true}
                loop={true}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {swiperSlider.map((el, index) => (
                  <SwiperSlide key={index} style={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={el.img}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: { xs: "none", sm: "block" },
                      }}
                    />
                    <Stack
                      direction={"column"}
                      alignItems={{ xs: "center", sm: "start" }}
                      sx={{
                        textAlign: "center",
                        position: "absolute",
                        top: "50%",
                        left: { xs: "50%", sm: "80px" },
                        transform: {
                          xs: "translate(-50%,-50%)",
                          sm: "translateY(-50%)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold" }}
                        color="#2B3445"
                      >
                        LIFE STYLE COLLECTION
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "bold",
                          mt: "18px",
                          p: 0,
                          color: "black",
                        }}
                        variant="h3"
                      >
                        {el.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "bold",
                          p: 0,
                          my: "18px",
                          color: "black",
                        }}
                        variant="h5"
                      >
                        SALE UP TO
                        <span
                          style={{
                            marginLeft: "5px",
                            fontSize: "1.5rem",
                            color: "#cd0e0e",
                          }}
                        >
                          30% OFF
                        </span>
                      </Typography>
                      <Typography
                        sx={{ mb: "18px" }}
                        variant="body1"
                        color="gray"
                      >
                        Get Free Shopping On Over $99.00
                      </Typography>

                      <Link
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "3px",
                          color: "#fff",
                          bgcolor: "#000",
                          p: "5px 25px ",
                          width: "100px",
                          borderRadius: "10px",
                        }}
                        underline="none"
                        href="#"
                        variant="body1"
                      >
                        shop now
                        <ArrowForward sx={{ fontSize: "17px" }} />
                      </Link>
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>

            <Grid
              sx={{ display: { xs: "none", md: "block" } }}
              size={{ md: 3 }}
            >
              <Box
                sx={{
                  height: "220px",
                  mb: "38px",
                  position: "relative",
                  boxShadow: 1,
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  src="./src/components/banner-17.jpg"
                  alt="img"
                />
                <Stack
                  direction={"column"}
                  sx={{ position: "absolute", top: "25px", left: "10px" }}
                >
                  <Typography variant="body1" color="#2B3445">
                    NEW ARRIVALS
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", p: 0, m: 0, color: "black" }}
                    variant="h6"
                  >
                    SUMMER
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      p: 0,
                      mt: "-7px",
                      color: "black",
                    }}
                    variant="h6"
                  >
                    SALE 20% OFF
                  </Typography>
                  <Link
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      color: "#2B3445",
                      transition: "0.3s",
                      "&:hover": { color: "#D23F57" },
                    }}
                    underline="none"
                    href="#"
                    variant="body1"
                  >
                    shop now
                    <ArrowForward sx={{ fontSize: "17px" }} />
                  </Link>
                </Stack>
              </Box>

              <Box sx={{ height: "220px", position: "relative", boxShadow: 1 }}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  src="./src/components/banner-16.jpg"
                  alt="img"
                />
                <Stack
                  direction={"column"}
                  sx={{ position: "absolute", top: "25px", left: "10px" }}
                >
                  <Typography variant="body1" color="#2B3445">
                    GAMING 4K
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", p: 0, m: 0, color: "black" }}
                    variant="h6"
                  >
                    DESKTOP &
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      p: 0,
                      mt: "-7px",
                      color: "black",
                    }}
                    variant="h6"
                  >
                    LAPTOPS
                  </Typography>
                  <Link
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      color: "#2B3445",
                      transition: "0.3s",
                      "&:hover": { color: "#D23F57" },
                    }}
                    underline="none"
                    href="#"
                    variant="body1"
                  >
                    shop now
                    <ArrowForward sx={{ fontSize: "17px" }} />
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Hero;
