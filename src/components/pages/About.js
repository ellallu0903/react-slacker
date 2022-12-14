import React from "react";
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
          component="div"
          noWrap
          sx={{
            fontFamily: "Inconsolata",
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            color: theme.palette.primary.light,
          }}
        >
          About
          <Typography
            variant="h4"
            component="span"
            noWrap
            sx={{
              fontFamily: "Merienda",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              color: theme.palette.primary.light,
              ml: 2.5,
            }}
          >
            Slacker
          </Typography>
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
              Slacker（偷薪賊），根據薪資計算方式切換分類，輸入薪資得出每小時、每分鐘、每秒的薪資，再乘以於本站停留的時間以獲得偷取的薪資。
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
              此為趣味性的薪資轉換工具，未來預計加入更多薪資計算（或轉換）器，讓本站更具實用性。
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
