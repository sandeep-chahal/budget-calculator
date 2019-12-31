import React from "react";
import "./log.styles.scss";

function Log(props) {
  return (
    <div className="log">
      <div className="left">
        <div className="icon"></div>
        <div className="name">{props.name}</div>
      </div>
      <div className="right">-${props.amount}</div>
    </div>
  );
}

export default Log;
