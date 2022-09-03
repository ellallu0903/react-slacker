import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { InputText, DisplayText } from "./common/Input";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { theme } from "./common/commonMuiTheme";

import style from "../sass/salaryCalculator.module.scss";

const SalaryCalculator = () => {
  const [salaryType, setSalaryType] = useState("monthly"); // monthly 月薪, hourly 時薪
  const [month, setMonth] = useState(22000);
  const [hour, setHour] = useState(150);
  const [startTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [validateInput, setValidateInput] = useState(false);

  const time = Math.round((currentTime - startTime) / 1000); // 取得共過了多少秒

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(Date.now());
    }, 100);
  }, []);

  useEffect(() => {
    if (
      (salaryType === "monthly" && !month) ||
      (salaryType === "hourly" && !hour)
    ) {
      return setValidateInput(false);
    } else {
      return setValidateInput(true);
    }
  }, [salaryType, month, hour]);

  const handleSalaryType = (_, type) => {
    setSalaryType(type);
  };

  const handleMonth = (e) => {
    const value = e.target.value === "" ? 0 : e.target.value;
    setMonth(parseInt(value, 10));
  };

  const handleHour = (e) => {
    const value = e.target.value === "" ? 0 : e.target.value;
    setHour(parseInt(value, 10));
  };

  const renderSalaryCalculator = (type) => {
    const hourlySalary =
      salaryType === "monthly" && !month ? "0" : (month / 240).toFixed(2);

    if (salaryType === "monthly") {
      return (
        <Grid>
          <InputText label="月薪" value={month} onChange={handleMonth} />
          <br />
          <DisplayText label="時薪" value={hourlySalary} />
        </Grid>
      );
    } else {
      return (
        <Grid>
          <InputText label="時薪" value={hour} onChange={handleHour} />
        </Grid>
      );
    }
  };

  const renderMinsSalary = () => {
    const salary =
      salaryType === "monthly"
        ? (month / 240 / 60).toFixed(2)
        : (hour / 60).toFixed(2);

    return (
      <Grid>
        <DisplayText label="分薪" value={validateInput ? salary : 0} />
      </Grid>
    );
  };

  const renderSecondsSalary = () => {
    const salary =
      salaryType === "monthly"
        ? (month / 240 / 60 / 60).toFixed(2)
        : (hour / 60 / 60).toFixed(2);

    return (
      <Grid>
        <DisplayText label="秒薪" value={validateInput ? salary : 0} />
      </Grid>
    );
  };

  const renderStealMoney = () => {
    const salary =
      salaryType === "monthly"
        ? ((time * month) / 240 / 60 / 60).toFixed(2)
        : ((time * hour) / 60 / 60).toFixed(2);

    return (
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={style.salaryCalculator__stealMoney_num}
      >
        <div>NT$</div>
        <h1>{validateInput ? salary : 0}</h1>
      </Grid>
    );
  };

  return (
    <Box
      className={style.salaryCalculator}
      sx={{
        height: "calc(100% - 36px)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={salaryType}
          exclusive
          onChange={handleSalaryType}
          sx={{ mb: 3 }}
          aria-label="text alignment"
        >
          <ToggleButton value="monthly" aria-label="left aligned">
            月薪
          </ToggleButton>
          <ToggleButton value="hourly" aria-label="centered">
            時薪
          </ToggleButton>
        </ToggleButtonGroup>

        <Grid
          container
          sx={{ height: { xs: "280px", sm: "340px" } }}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {renderSalaryCalculator()}
          {renderMinsSalary()}
          {renderSecondsSalary()}
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={8}
          sm={5}
          md={3}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={style.salaryCalculator__transitTime}
            xs={12}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ color: theme.palette.primary.main, mb: 1.5 }}
            >
              <AccessTimeFilledIcon sx={{ mr: 0.5 }} />
              經過時間
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              xs={12}
              sx={{ mb: 3 }}
            >
              <div>
                <h2>{Math.floor(time / 3600)}</h2>
                <span>HOURS</span>
              </div>
              <div>
                <h2>{Math.floor(Math.floor(time % 3600) / 60)}</h2>
                <span>MINUTES</span>
              </div>
              <div>
                <h2>{time % 60}</h2>
                <span>SECONDS</span>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={style.salaryCalculator__stealMoney}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ color: theme.palette.primary.main, mb: 1.5 }}
            >
              <PaidIcon sx={{ mr: 0.5 }} />
              偷取薪水
            </Grid>
            {renderStealMoney()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalaryCalculator;
