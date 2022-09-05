import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

import style from "../../sass/layout.module.scss";

const Footer = () => {
  return (
    <footer>
      <Box
        className={style.footer}
        sx={{ height: "36px", background: theme.palette.primary.main }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Typography
            variant="div"
            noWrap
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "#fff",
              mr: 1.5,
            }}
          >
            Copyright © 2022 Yi-Zhen Lu
          </Typography>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=ellallu0903&repo=react-slacker&type=star&count=false"
            frameborder="0"
            scrolling="0"
            width="55"
            height="20"
            title="GitHub"
          ></iframe>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
