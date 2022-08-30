import React, { useState, useEffect } from "react";

const App = () => {
  const [salaryType, setSalaryType] = useState("monthly"); // monthly 月薪, hourly 時薪
  const [month, setMonth] = useState(22000);
  const [hour, setHour] = useState(150);
  const [startTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const time = (currentTime - startTime) / 1000; // 取得共過了多少秒

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(Date.now());
    }, 100);
  }, []);

  const handleSalaryType = (type) => {
    setSalaryType(type);
  };

  const handleMonth = (e) => {
    const value = e.target.value;
    setMonth(parseInt(value, 10));
  };

  const handleHour = (e) => {
    const value = e.target.value;
    setHour(parseInt(value, 10));
  };

  const renderSalaryCalculater = (type) => {
    const hourlySalary = salaryType === "monthly" && !month ? "0" : month / 240;
    if (salaryType === "monthly") {
      return (
        <div>
          <label>月薪</label>
          <input type="number" value={month} onChange={handleMonth} />
          <br />
          <label>時薪</label>
          <div>{hourlySalary}</div>
        </div>
      );
    } else {
      return (
        <div>
          <label>時薪</label>
          <input type="number" value={hour} onChange={handleHour} />
        </div>
      );
    }
  };

  const renderMinsSalary = () => {
    if (
      (salaryType === "monthly" && !month) ||
      (salaryType === "hourly" && !hour)
    ) {
      return <div>0</div>;
    }

    if (salaryType === "monthly") {
      return <div>{month / 240 / 60}</div>;
    } else {
      return <div>{hour / 60}</div>;
    }
  };

  const renderSecondsSalary = () => {
    if (
      (salaryType === "monthly" && !month) ||
      (salaryType === "hourly" && !hour)
    ) {
      return <div>0</div>;
    }

    if (salaryType === "monthly") {
      return <div>{month / 240 / 60 / 60}</div>;
    } else {
      return <div>{hour / 60 / 60}</div>;
    }
  };

  const renderStealMoney = () => {
    if (
      (salaryType === "monthly" && !month) ||
      (salaryType === "hourly" && !hour)
    ) {
      return <div>0</div>;
    }

    if (salaryType === "monthly") {
      return <div>{((time * month) / 240 / 60 / 60).toFixed(2)}</div>;
    } else {
      return <div>{((time * hour) / 60 / 60).toFixed(2)}</div>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSalaryType("monthly")}>月薪</button>
        <button onClick={() => handleSalaryType("hourly")}>時薪</button>
      </div>
      {renderSalaryCalculater()}
      <br />
      <label>分薪</label>
      {renderMinsSalary()}
      <br />
      <label>秒薪</label>
      {renderSecondsSalary()}
      <br />
      <label>經過時間</label>
      <span>{time.toFixed(1)}</span> （只顯示小數秒後一位）
      <br />
      <label>偷取薪水</label>
      {renderStealMoney()}
      （只顯示小數秒後兩位）
    </div>
  );
};

export default App;
