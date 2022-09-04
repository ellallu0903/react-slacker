import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

const About = () => {
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
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/about"
          sx={{
            fontFamily: "Inconsolata",
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            color: theme.palette.primary.light,
          }}
        >
          About Slacker
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={9} sm={6}>
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
              Slacker（偷薪賊），根據薪資計算方式切換分類，得出每小時、每分鐘、每秒的薪資，再乘以於本站停留的時間以獲得偷取的薪資，此為趣味性的薪資轉換工具。
            </Typography>
          </Grid>
          <Grid xs={9} sm={6}>
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
              未來預計加入更多薪資計算（或轉換）器，讓本站更具實用性。
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
