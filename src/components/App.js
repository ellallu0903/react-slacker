import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/common/commonMuiTheme";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import style from "../sass/layout.module.scss";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={style.app}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
