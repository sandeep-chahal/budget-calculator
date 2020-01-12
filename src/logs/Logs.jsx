import React from "react";
import Log from "./Log";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Logs extends React.Component {
  displayLogs = logs => {
    if (logs == false) return;
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    let currentTime = new Date(logs[0].timestamp);
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth();
    let newLogs = [];
    let newLog = { date: null, logs: [] };
    logs.map(log => {
      const logTime = new Date(log.timestamp);
      const logDate = logTime.getDate();
      const logMonth = logTime.getMonth();
      if (logDate === currentDate && logMonth === currentMonth) {
        if (todayDate === logDate && todayMonth === logMonth) {
          newLog.date = "Today";
          newLog.logs.push(log);
        } else {
          newLog.date = logDate + " " + months[logMonth];
          newLog.logs.push(log);
        }
      } else {
        currentTime = new Date(log.timestamp);
        currentDate = currentTime.getDate();
        currentMonth = currentTime.getMonth();
        newLogs.push(newLog);
        newLog.date = logDate + " " + months[logMonth];
        newLog.logs = [];
        newLog.logs.push(log);
      }
    });
    newLogs.push(newLog);
    return "";
  };

  render() {
    return <div>{this.displayLogs(this.props.logs)}</div>;
  }
}

export default Logs;

// function Header({ timestamp }) {
//   return <h2></h2>;
// }
