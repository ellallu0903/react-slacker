import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
