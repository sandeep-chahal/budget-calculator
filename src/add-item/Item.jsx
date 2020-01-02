import React from "react";
import "./item.styles.scss";

function Item({ name, hidden, addingItem }) {
  return (
    <div
      className={hidden ? "hidden item" : "item"}
      onClick={() => addingItem(name)}
    >
      <div className={name}></div>
      <div className="name">{name}</div>
    </div>
  );
}

export default Item;
