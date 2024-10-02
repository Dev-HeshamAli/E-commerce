import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";

const HeaderMainSection = ({
  // eslint-disable-next-line react/prop-types
  womenCategoryAPI,
  // eslint-disable-next-line react/prop-types
  menCategoryAPI,
  // eslint-disable-next-line react/prop-types
  allProductsAPI,
  // eslint-disable-next-line react/prop-types
  setMyData,
  // eslint-disable-next-line react/prop-types
  myData,
}) => {

  const [gender, setGender] = useState(myData);

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
    setMyData(newGender);
  };

  const customTheme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 415,
        sm: 750,
        md: 950,
        lg: 1280,
        xl: 1920,
        custom: 1440,
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <Box sx={{ mt: 5, my: 3 }}>
          <Grid
            container
            spacing={3}
            alignItems={"end"}
            justifyContent={{ xxs: "center", md: "space-between" }}
          >
            <Grid
              size={{ xs: 12, md: 5 }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={{ xxs: "center", md: "start" }}
            >
              <Box>
                <Typography
                  sx={{
                    textAlign: { xxs: "center", md: "start" },
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Selected Products
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: { xxs: "center", md: "start" },
                  }}
                >
                  All our new arrivals in a exclusive brand selection
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 7 }}
              sx={{
                display: "flex",
                justifyContent: { xxs: "center", md: "end" },
              }}
            >
              <Box>
                <ToggleButtonGroup
                  color="error"
                  value={gender}
                  exclusive
                  onChange={handleGenderChange}
                  aria-label="Gender"
                  sx={{
                    ".Mui-selected": {
                      border: "1px solid rgba(233,69,96,0.5) !important",
                      color: "#e94560 !important",
                      backgroundColor: "initial",
                    },
                  }}
                >
                  <ToggleButton
                    className="myButton"
                    sx={{
                      color: "#888888",
                      mr: "10px",
                    }}
                    value={allProductsAPI}
                  >
                    All Products
                  </ToggleButton>

                  <ToggleButton
                    className="myButton"
                    sx={{
                      color: "#888888",
                      mr: "10px",
                    }}
                    value={menCategoryAPI}
                  >
                    Men Category
                  </ToggleButton>

                  <ToggleButton
                    className="myButton"
                    sx={{
                      color: "#888888",
                    }}
                    value={womenCategoryAPI}
                  >
                    Women Category
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HeaderMainSection;
