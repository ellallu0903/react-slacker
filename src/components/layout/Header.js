import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

import style from "../../sass/layout.module.scss";

const drawerWidth = "100%";

export default function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toHomePage = () => {
    navigate("/");
    handleDrawerToggle();
  };

  const toAboutPage = () => {
    navigate("/about");
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="close drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          alignItems: "center",
          position: "absolute",
          top: 8,
          right: 16,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        className={style.logo}
        variant="h4"
        noWrap
        component="h4"
        onClick={toHomePage}
        sx={{
          fontFamily: "Merienda",
          fontWeight: 700,
          letterSpacing: ".1rem",
          textDecoration: "none",
          color: theme.palette.primary.main,
          mb: 5,
          cursor: "pointer",
        }}
      >
        Slacker
      </Typography>
      <Typography
        className={style.nav__item_full}
        variant="h4"
        noWrap
        onClick={toAboutPage}
        sx={{
          fontFamily: "Inconsolata",
          fontWeight: 400,
          letterSpacing: ".1rem",
          textDecoration: "none",
          color: theme.palette.primary.light,
        }}
      >
        About
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <Typography
              className={style.logo}
              variant="h5"
              noWrap
              sx={{
                fontFamily: "Merienda",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: theme.palette.primary.main,
              }}
            >
              Slacker
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/about">
              <Typography
                className={style.nav__item}
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "Inconsolata",
                  fontWeight: 400,
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
              >
                About
              </Typography>
            </Link>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, alignItems: "center" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
