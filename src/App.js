import "./App.css";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import QuranLP from "./pages/QuranLP";
import FAQsPage from "./pages/FAQsPage";
import TrialPage from "./pages/TrialPage";

let theme = createTheme({
  palette: {
    black: "#222222",
    lightBlack: "#555555",
    white: "#f8f9fa",
    warning: {
      main: "#d1ad3c",
      light: "#d1ad3c",
    },
    success: {
      main: "#49bcac",
      light: "#49bcac",
    },
    grey: { main: "#5e6576" },
    blue: { main: "#2A486C" },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<QuranLP />} />
            <Route exact path="/faqs" element={<FAQsPage />} />
            <Route exact path="/trial" element={<TrialPage />} />
          </Routes>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

export default App;
