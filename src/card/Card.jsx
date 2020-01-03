import React from "react";
import "./CardStyles.scss";

function Card(props) {
  return (
    <div className={props.name + " card"}>
      <div className="details">
        <h3>{props.name}</h3>
        <div className="amount">
          {props.amount < 0 ? "-" : ""}${Math.abs(props.amount)}
        </div>
      </div>
      <div className={props.name + " icon"}></div>
    </div>
  );
}

export default Card;
