import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { theme } from "../common/commonMuiTheme";

import style from "../../sass/layout.module.scss";

const Footer = () => {
  return (
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
        <footer>
          <Typography
            variant="div"
            noWrap
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "#fff",
            }}
          >
            Copyright © 2022 Yi-Zhen Lu
          </Typography>
        </footer>
      </Grid>
    </Box>
  );
};

export default Footer;
