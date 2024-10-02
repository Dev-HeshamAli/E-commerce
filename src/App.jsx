import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { useState } from "react";
import { Box } from "@mui/material";
import Hero from "./components/hero/Hero";
import IconsSection from "./components/hero/IconsSection";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ContentMainSection from "./components/main/ContentMainSection";

function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currantMode")
      ? localStorage.getItem("currantMode")
      : "light"
  );

  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2", // الأزرق الرئيسي
            },
            secondary: {
              main: "#9c27b0", // البنفسجي الرئيسي
            },
            background: {
              default: "#e3e3e3", // الخلفية الفاتحة
              paper: "#444444", // لون الـ Paper
            },
            text: {
              primary: "#000000", // النص الرئيسي في الوضع الفاتح
              secondary: "#9d9898", // النص الثانوي
            },
          }
        : {
            primary: {
              main: "#90caf9", // الأزرق الفاتح
            },
            secondary: {
              main: "#ce93d8", // البنفسجي الفاتح
            },
            background: {
              default: "#1e1e1e", // الخلفية الداكنة
              paper: "#161616", // لون الـ Paper في الوضع الليلي
            },
            text: {
              primary: "#ffffff", // النص الرئيسي في الوضع الليلي
              secondary: "#bbbbbb", // النص الثانوي
            },
            buttonBackground: {
              primary: "#ff000024",
            },
            buttonText: {
              primary: "#ae0606",
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header1 setMode={setMode} />
        <Header2 />
        <Header3 />
        <Hero />
        <IconsSection />
        <ContentMainSection />
        <Footer />
      </Box>
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
