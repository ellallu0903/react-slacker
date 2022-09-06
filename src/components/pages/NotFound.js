import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

import style from "../../sass/layout.module.scss";

const NotFound = () => {
  return (
    <Box
      sx={{
        height: "calc(100% - 36px)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <img
          width={240}
          height={240}
          src={require("../../assets/not_found_404.png")}
          alt="404"
        />
        <Typography
          variant="h4"
          component="div"
          noWrap
          sx={{
            fontFamily: "Inconsolata",
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            color: theme.palette.primary.light,
            mt: 4,
          }}
        >
          The page does't exist!
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            fontFamily: "Inconsolata",
            fontWeight: 400,
            letterSpacing: ".1rem",
            textDecoration: "none",
            color: theme.palette.primary.light,
            mt: 3,
          }}
        >
          回到
          <Link to="/">
            <Typography
              className={style.comeback_home}
              variant="p"
              noWrap
              sx={{
                fontFamily: "Inconsolata",
                fontWeight: 500,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: theme.palette.primary.main,
                ml: 1,
              }}
            >
              首頁
            </Typography>
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};

export default NotFound;
