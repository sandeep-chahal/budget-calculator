import React from "react";
import "./item.styles.scss";

function Item({ name }) {
  return (
    <div className="item">
      <div className={name}></div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Item;
