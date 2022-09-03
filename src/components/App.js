import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/common/commonMuiTheme";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import style from "../sass/layout.module.scss";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100%" }} className={style.app}>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
