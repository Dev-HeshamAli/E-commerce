import {
  AccessAlarms,
  CreditScore,
  ElectricBolt,
  WorkspacePremium,
} from "@mui/icons-material";
import {
  Container,
  Box,
  ThemeProvider,
  createTheme,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const BoxInfo = [
  {
    icon: <ElectricBolt sx={{ fontSize: "30px" }} />,
    title: "Fast Delivery",
    subTitle: "Start from 10$",
  },
  {
    icon: <WorkspacePremium sx={{ fontSize: "30px" }} />,
    title: "Money Guarantee",
    subTitle: "7 Days Back",
  },
  {
    icon: <AccessAlarms sx={{ fontSize: "30px" }} />,
    title: "365 Days",
    subTitle: "for free return",
  },
  {
    icon: <CreditScore sx={{ fontSize: "30px" }} />,
    title: "Payment",
    subTitle: "Secure system",
  },
];

const customTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 415,
      sm: 750,
      md: 900,
      lg: 1280,
      xl: 1920,
      custom: 1440,
    },
  },
});

const IconsSection = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <Box>
          <Grid container spacing={1} alignItems={"center"}>
            {BoxInfo.map((el, index) => (
              <Grid
                key={index}
                sx={{
                  bgcolor: theme.palette.background.paper,
                  borderRadius: "5px",
                }}
                size={{ xxs: 12, xs: 6, md: 3 }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2}
                  py={1}
                >
                  <Box sx={{ color: "#fff" }}>{el.icon}</Box>
                  <Box>
                    <Typography sx={{ color: "#fff" }} variant="body1">
                      {el.title}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.text.secondary }}
                      variant="body1"
                    >
                      {el.subTitle}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default IconsSection;
