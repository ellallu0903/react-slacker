import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Input, Display, theme } from "../components/salaryCalculator/Input";
import { ThemeProvider } from "@mui/material/styles";

import classes from "../sass/layout.module.scss";

const SalaryCalculator = () => {
  const [salaryType, setSalaryType] = useState("monthly"); // monthly 月薪, hourly 時薪
  const [month, setMonth] = useState(22000);
  const [hour, setHour] = useState(150);
  const [startTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const time = (currentTime - startTime) / 1000; // 取得共過了多少秒
  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(Date.now());
    }, 100);
  }, []);

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

  const validateInput = () => {
    if (
      (salaryType === "monthly" && !month) ||
      (salaryType === "hourly" && !hour)
    ) {
      return false;
    } else {
      return true;
    }
  };

  const renderSalaryCalculator = (type) => {
    const hourlySalary =
      salaryType === "monthly" && !month ? "0" : (month / 240).toFixed(2);

    if (salaryType === "monthly") {
      return (
        <div>
          <Input label="月薪" value={month} onChange={handleMonth} />
          <br />
          <Display label="時薪" value={hourlySalary} />
        </div>
      );
    } else {
      return (
        <div>
          <Input label="時薪" value={hour} onChange={handleHour} />
        </div>
      );
    }
  };

  const renderMinsSalary = () => {
    if (!validateInput()) return <div>0</div>;

    const salary =
      salaryType === "monthly"
        ? (month / 240 / 60).toFixed(2)
        : (hour / 60).toFixed(2);

    return <Display label="分薪" value={salary} />;
  };

  const renderSecondsSalary = () => {
    if (!validateInput()) return <div>0</div>;

    const salary =
      salaryType === "monthly"
        ? (month / 240 / 60 / 60).toFixed(2)
        : (hour / 60 / 60).toFixed(2);

    return <Display label="秒薪" value={salary} />;
  };

  const renderStealMoney = () => {
    if (!validateInput()) return <div>0</div>;

    const salary =
      salaryType === "monthly"
        ? ((time * month) / 240 / 60 / 60).toFixed(2)
        : ((time * hour) / 60 / 60).toFixed(2);

    return (
      <Grid
        sx={{ flexCenter }}
        className={classes.salaryCalculator__stealMoney_num}
      >
        <div>NT$</div>
        <h2>{salary}</h2>
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className={classes.salaryCalculator}
        sx={{
          ...flexCenter,
          height: "100%",
        }}
      >
        <Grid sx={flexCenter}>
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
          <Box
            sx={{
              ...flexCenter,
              height: "340px",
              justifyContent: "flex-start",
            }}
          >
            {renderSalaryCalculator()}
            {renderMinsSalary()}
            {renderSecondsSalary()}
          </Box>
          <Grid sx={{ ...flexCenter, width: "100%" }}>
            <div className={classes.salaryCalculator__transitTime}>
              <label>經過時間</label>
              <h2>{time.toFixed(1)}</h2>秒
            </div>
            <hr />
            <div className={classes.salaryCalculator__stealMoney}>
              <label>偷取薪水</label>
              {renderStealMoney()}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SalaryCalculator;
